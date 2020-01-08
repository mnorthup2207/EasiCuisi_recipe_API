// selector and range in formDiv
$(document).ready(function () {
    $('select').formSelect();
});


// event listener for search bar
$('.recipeInputs').on('submit', function (e) {
    e.preventDefault();
    // variables for selectors
    var protein = $('#proteinInput').val();
    var meal = $('#mealInput').val();
    var diet = $('#dietInput').val();
    var serving = $('#servingInput').val();
    var cooking = $('#cookingInput').val();
    var range = $('#test5').val();
    if (protein === 'Beef' || protein === 'Cheese' || protein === 'Chicken' || protein === 'Eggs' || protein === 'Fish' || protein === 'Fruit' || protein === 'Oats' || protein === 'Quinoa' || protein === 'Turkey' || protein === 'Pork' || protein === 'Vegetable' || protein === 'Yogurt' || protein === 'Apple' || protein === 'Lentils') {
        // console.log(protein)
        // console.log(meal)
        // console.log(diet)
        // console.log(serving)
        console.log(cooking)
        // console.log(range)
        // AJAX call from 
        var appKEY = "14ea6a2a8ec5df04798b53f1975f47fb";
        var apiID = "0a8d88d0";
        queryURL = `https://api.edamam.com/search?q=${protein}&app_id=${apiID}&app_key=${appKEY}&from=0&to=100&time=1%2B`
        console.log(queryURL);
        // &healthLabels=${}
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            // console.log(response);
            var servingSize = response.hits.filter(function(size){
                return size.recipe.yield == serving
            })
            var cookingTime = servingSize.filter(time => (time.recipe.totalTime <= cooking))
            console.log(servingSize);
            console.log(cookingTime);
            
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
            $('.carousel').carousel();
        });
    } else {
        $('.modal').modal();
    }
});

