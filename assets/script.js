

// selector and range in formDiv
$(document).ready(function () {
    $('select').formSelect();
});
// carousel functions
$(document).ready(function () {
    $('.carousel').carousel();
});

// event listener for search bar
$('.search').on('click', function (e) {
    e.preventDefault();
    // console.log($('#resultsDiv'))
    $('.carousel').show();
    
    
});



// AJAX call from 

// var appKEY = "14ea6a2a8ec5df04798b53f1975f47fb";
// var apiID = "0a8d88d0";
// queryURL = `https://api.edamam.com/search?q=chicken&app_id=${apiID}&app_key=${appKEY}&from=0&to=100&calories=591-722`	
// console.log(queryURL);


// $.ajax({
//         url: queryURL,
//         method: 'GET'
//     }).then(function(response) {
//         console.log(response)
//     })

