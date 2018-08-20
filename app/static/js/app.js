// Toggle the drop down menu
$(document).ready(function () {
    $(".dropdown-toggle").dropdown();
});

// Save API key
var appid = "1e84540e"

// Set the movie posters on the index page
$(document).ready(function () {
    var black_panther = `http://www.omdbapi.com/?apikey=${appid}&t=black+panther`;
    var avengers = `http://www.omdbapi.com/?apikey=${appid}&t=avengers+infinity+war`;
    var incredibles_2 = `http://www.omdbapi.com/?apikey=${appid}&t=incredibles+2`;
    var jurassic_world2 = `http://www.omdbapi.com/?apikey=${appid}&t=jurassic+world+fallen+kingdom`;
    var deadpool_2 = `http://www.omdbapi.com/?apikey=${appid}&t=deadpool+2`;
    $.get(black_panther, data => {
        var black_panther = data.Poster;
        $('.black_panther').html(`<img class="img-responsive positioned1" height="235px;" width="151px" src=${black_panther}>`);
    });
    $.get(avengers, data => {
        var avengers = data.Poster;
        $('.avengers').html(`<img class="img-responsive float-left positioned" height="224px;" width="151px" src=${avengers}><br>`);
    });
    $.get(incredibles_2, data => {
        var incredibles_2 = data.Poster;
        $('.incredibles_2').html(`<img class="img-responsive float-left positioned" height="224px;" width="151px" src=${incredibles_2}>`);
    });
    $.get(jurassic_world2, data => {
        var jurassic_world2 = data.Poster;
        $('.jurassic_world').html(`<img class="img-responsive float-left positioned" height="224px;" width="151px" src=${jurassic_world2}>`);
    });
    $.get(deadpool_2, data => {
        var deadpool_2 = data.Poster;
        $('.deadpool').html(`<img class="img-responsive float-left positioned" height="224px;" width="151px" src=${deadpool_2}>`);
    });
});

// If we are at the inde page, load the text.
if (document.location.pathname == "/") {
    $('#title').html(`<p>Welcome to Movies Search n Shop! Enter search results for instant results. No waiting for pages to load!</p>`);
}

// Set the information to display on the submit button click
$('#submitButton').on('click', function () {
    var input = $("#searchBar").val();;
    var url = `http://www.omdbapi.com/?apikey=${appid}&t=${input}`;
    $.get(url, data => {
        var title = data.Title;
        var year = data.Year;
        var rating = data.Rated;
        var runtime = data.Runtime;
        var director = data.Director;
        var poster = data.Poster;
        var actors = data.Actors;
        var plot = data.Plot;

        console.log(year);
        $('#title').html(`<h2>${title}</h2>`);
        $('#year').html(`Year: ${year}`);
        $('#rated').html(`Rating: ${rating}`);
        $('#runtime').html(`Runtime: ${runtime}`);
        $('#director').html(`Directed By: ${director}`);
        $('#poster').html(`<img src=${poster}>`);
        $('#actor').html(`Actors: ${actors}`);
        $('#plot').html(`Synopsis: ${plot}`);
        
    });
    $('#searchBar').val("");
    // window.location.replace('http://127.0.0.1:5000/page2')
});

// Append the "Add to Cart" button upon either a query or a poster click
$('#submitButton').on('click', () => {
    $('.addToCart').html('<a href="/cart" class="btn btn-success">Add to Cart</a>')
});

$('#blackPanther').on('click', () => {
    $('.addToCart').html('<a href="/cart" class="btn btn-success">Add to Cart</a>')
});

$('#avengers').on('click', () => {
    $('.addToCart').html('<a href="/cart" class="btn btn-success">Add to Cart</a>')
});

$('#incredibles_2').on('click', () => {
    $('.addToCart').html('<a href="/cart" class="btn btn-success">Add to Cart</a>')
});

$('#jurassic_world').on('click', () => {
    $('.addToCart').html('<a href="/cart" class="btn btn-success">Add to Cart</a>')
});

$('#deadpool').on('click', () => {
    $('.addToCart').html('<a href="/cart" class="btn btn-success">Add to Cart</a>')
});


/* -----ALLOW ENTER TO SUBMIT THE TITLE----- */
var enter_button = document.getElementById("searchBar");
// Execute a function when the user releases a key on the keyboard
enter_button.addEventListener("keyup", function (event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("submitButton").click();
    }
});

$('#blackPanther').on('click', function () {
    var url = `http://www.omdbapi.com/?apikey=${appid}&t=black+panther`;
    $.get(url, data => {
        var title = data.Title;
        var year = data.Year;
        var rating = data.Rated;
        var runtime = data.Runtime;
        var director = data.Director;
        var poster = data.Poster;
        var actors = data.Actors;
        var plot = data.Plot;

        console.log(year);
        $('#title').html(`<h2>${title}</h2>`);
        $('#year').html(`Year: ${year}`);
        $('#rated').html(`Rating: ${rating}`);
        $('#runtime').html(`Runtime: ${runtime}`);
        $('#director').html(`Directed By: ${director}`);
        $('#poster').html(`<img src=${poster}>`);
        $('#actor').html(`Actors: ${actors}`);
        $('#plot').html(`Synopsis: ${plot}`);
        
        

    });
    $('#searchBar').val("");
    // window.location.replace('http://127.0.0.1:5000/page2')
});


// if (document.location.pathname == "/topmovie1") {
//     $(document).ready(function () {
//         var black_panther = `http://www.omdbapi.com/?apikey=${appid}&t=black+panther`;
//         $.get(black_panther, data => {
//             var title = data.Title;
//             var year = data.Year;
//             var rating = data.Rated;
//             var runtime = data.Runtime;
//             var director = data.Director;
//             var poster = data.Poster;
//             var actors = data.Actors;
//             var plot = data.Plot;

//             console.log(year);
//             $('#title').html(`<h2>${title}</h2>`);
//             $('#year').html(`Year: ${year}`);
//             $('#rated').html(`Rating: ${rating}`);
//             $('#runtime').html(`Runtime: ${runtime}`);
//             $('#director').html(`Directed By: ${director}`);
//             $('#poster').html(`<img src=${poster}>`);
//             $('#actor').html(`Actors: ${actors}`);
//             $('#plot').html(`Synopsis: ${plot}`);
            
            
//         });
//     });
// }




$('#avengers').on('click', function () {
    var avengers = `http://www.omdbapi.com/?apikey=${appid}&t=avengers+infinity+war`;
    $.get(avengers, data => {
        var title = data.Title;
        var year = data.Year;
        var rating = data.Rated;
        var runtime = data.Runtime;
        var director = data.Director;
        var poster = data.Poster;
        var actors = data.Actors;
        var plot = data.Plot;

        console.log(year);
        $('#title').html(`<h2>${title}</h2>`);
        $('#year').html(`Year: ${year}`);
        $('#rated').html(`Rating: ${rating}`);
        $('#runtime').html(`Runtime: ${runtime}`);
        $('#director').html(`Directed By: ${director}`);
        $('#poster').html(`<img src=${poster}>`);
        $('#actor').html(`Actors: ${actors}`);
        $('#plot').html(`Synopsis: ${plot}`);
        
        
    });
});


$('#incredibles_2').on('click', function () {
    var incredibles_2 = `http://www.omdbapi.com/?apikey=${appid}&t=incredibles+2`;
    $.get(incredibles_2, data => {
        var title = data.Title;
        var year = data.Year;
        var rating = data.Rated;
        var runtime = data.Runtime;
        var director = data.Director;
        var poster = data.Poster;
        var actors = data.Actors;
        var plot = data.Plot;

        console.log(year);
        $('#title').html(`<h2>${title}</h2>`);
        $('#year').html(`Year: ${year}`);
        $('#rated').html(`Rating: ${rating}`);
        $('#runtime').html(`Runtime: ${runtime}`);
        $('#director').html(`Directed By: ${director}`);
        $('#poster').html(`<img src=${poster}>`);
        $('#actor').html(`Actors: ${actors}`);
        $('#plot').html(`Synopsis: ${plot}`);
        
        
    });
});



$('#jurassic_world').on('click', function () {
    var jurassic_world2 = `http://www.omdbapi.com/?apikey=${appid}&t=jurassic+world+fallen+kingdom`;
    $.get(jurassic_world2, data => {
        var title = data.Title;
        var year = data.Year;
        var rating = data.Rated;
        var runtime = data.Runtime;
        var director = data.Director;
        var poster = data.Poster;
        var actors = data.Actors;
        var plot = data.Plot;

        console.log(year);
        $('#title').html(`<h2>${title}</h2>`);
        $('#year').html(`Year: ${year}`);
        $('#rated').html(`Rating: ${rating}`);
        $('#runtime').html(`Runtime: ${runtime}`);
        $('#director').html(`Directed By: ${director}`);
        $('#poster').html(`<img src=${poster}>`);
        $('#actor').html(`Actors: ${actors}`);
        $('#plot').html(`Synopsis: ${plot}`);
        
    });
});

$('#deadpool').on('click', function () {
    var deadpool_2 = `http://www.omdbapi.com/?apikey=${appid}&t=deadpool+2`;
    $.get(deadpool_2, data => {
        var title = data.Title;
        var year = data.Year;
        var rating = data.Rated;
        var runtime = data.Runtime;
        var director = data.Director;
        var poster = data.Poster;
        var actors = data.Actors;
        var plot = data.Plot;

        console.log(year);
        $('#title').html(`<h2>${title}</h2>`);
        $('#year').html(`Year: ${year}`);
        $('#rated').html(`Rating: ${rating}`);
        $('#runtime').html(`Runtime: ${runtime}`);
        $('#director').html(`Directed By: ${director}`);
        $('#poster').html(`<img src=${poster}>`);
        $('#actor').html(`Actors: ${actors}`);
        $('#plot').html(`Synopsis: ${plot}`);
        
        
    });
});


