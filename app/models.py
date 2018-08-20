# information that different entitites are built from.

from app import db, login
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# any instance you create of this is going to be a model of the User class
class User(db.Model, UserMixin):
    # we want the id to be an integer, and unique to each user that is created
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), index=True, unique=True)
    password_hash = db.Column(db.String(100))
    admin = db.Column(db.Boolean, default=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f"User({self.email})"

@login.user_loader
def load_user(id):
    return User.query.get(int(id))