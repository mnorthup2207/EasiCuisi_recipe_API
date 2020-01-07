

// selector and range in formDiv
$(document).ready(function () {
    $('select').formSelect();
});
// carousel functions
$(document).ready(function () {
});

// event listener for search bar
$('.search').on('click', function (e) {
    e.preventDefault();
    // console.log($('#resultsDiv'))
    $('.carousel').carousel();
});


// protein selector
 var protein = $('#proteinInput')
protein.on('change', function(){
    protein = $(this).val()
    console.log(protein)
    // AJAX call from 
    var appKEY = "14ea6a2a8ec5df04798b53f1975f47fb";
    var apiID = "0a8d88d0";
    queryURL = `https://api.edamam.com/search?q=${protein}&app_id=${apiID}&app_key=${appKEY}&from=0&to=100`	
    console.log(queryURL);
    
    
    $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {

            $('.foodImg1').attr('src', response.hits[0].recipe.image)
            $('.a').html(response.hits[0].recipe.label)
            $('.foodImg2').attr('src', response.hits[1].recipe.image)
            $('.b').html(response.hits[1].recipe.label)
            $('.foodImg3').attr('src', response.hits[2].recipe.image)
            $('.c').html(response.hits[2].recipe.label)
            $('.foodImg4').attr('src', response.hits[3].recipe.image)
            $('.d').html(response.hits[3].recipe.label)
            $('.foodImg5').attr('src', response.hits[4].recipe.image)
            $('.e').html(response.hits[4].recipe.label)
        });

})


