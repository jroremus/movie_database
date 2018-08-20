# import our app package. From the app folder we import app, which we set in our __init__.py file
from app import app, db
import os
from flask import render_template, redirect, url_for, flash, request, session
from app.forms import RegistrationForm, LoginForm, AdminForm
from flask_login import current_user, login_user, login_required, logout_user
from app.models import User
from werkzeug.urls import url_parse
from app.stripe_info import stripe_keys
import stripe

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user is None or not user.check_password(form.password.data):
            flash("The email or password did not match. Please try again.")
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != "":
            next_page = url_for('index')
        return redirect(next_page)
        #flash("You are logged in!")
        #return redirect(url_for('index'))
    return render_template('login.html', form=form)

@app.route('/logout')
def logout():
    logout_user()
    flash("You are logged out!")
    return redirect(url_for('index'))

@app.route('/registration', methods=['GET', 'POST'])
def registration():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash("Congratulations, you are now registered!") 
        return redirect(url_for('login'))
    return render_template('registration.html', form=form)

@app.route('/admin', methods=['GET', 'POST'])
def admin():
    def get_users():
        users_list = []
        for u in User.query.all():
            if u.id != current_user.id:
                users_list.append(u)
        return users_list
    context = {
        'form': AdminForm(), 
        'users': get_users()
        }
    form = AdminForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user is None:
            new_user = User(email=form.email.data)
            new_user.set_password(form.email.data)
            db.session.add(new_user)
            db.session.commit()
        flash("Added New User")
        return redirect(url_for('admin'))
    return render_template('admin.html', **context)

@app.route('/delete_user/<int:id>')
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return redirect(url_for('admin')) 



@app.route('/cart')
@login_required
def cart():
    return render_template('cart.html')


@app.route('/remove_item')
def remove_item():
  return redirect(url_for('cart'))


@app.route('/clear_cart')
def clear_cart():
  return redirect(url_for('cart'))


@app.route('/charge', methods=['POST'])
def charge():
  amount = 500

  customer = stripe.Customer.create(
      email='email@example.com',
      source=request.form['stripeToken']
  )

  charge = stripe.Charge.create(
      customer=customer.id,
      amount=amount,
      currency='usd',
      description="This is a test charge with Flask"
  )

  session['chargeAmount'] = amount
  return redirect(url_for('thanks'))
