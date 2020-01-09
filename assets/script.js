// selector and range in formDiv
$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    $('.tabs').tabs();
});
var filteredRecipes;
var filteredRecipe;
// event listener for search bar
$('.recipeInputs').on('submit', function (e) {
    e.preventDefault();

    $(".img1").css("opacity", ".45");
    // variables for selectors
    var protein = $('#proteinInput').val();
    var serving = $('#servingInput').val();
    var cooking = $('#cookingInput').val();
    var range = $('#test5').val();
    var iHead = $('.ingredientsHead');

    // AJAX call from 
    var appKEY = "14ea6a2a8ec5df04798b53f1975f47fb";
    var apiID = "0a8d88d0";
    queryURL = `https://api.edamam.com/search?q=${protein}&app_id=${apiID}&app_key=${appKEY}&from=0&to=100&time=1%2B`
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response)
        filteredRecipes = response.hits;
        if (serving) filteredRecipes = filteredRecipes.filter(item => item.recipe.yield == serving)
        if (cooking) filteredRecipes = filteredRecipes.filter(item => item.recipe.totalTime <= cooking)
        if (range) filteredRecipes = filteredRecipes.filter(item => item.recipe.calories <= range)
        console.log(filteredRecipes);

        // for (var i = 0; i > filteredRecipes.length; i++) {
        //     $('#carousel').html($(`'<a class="carousel-item" href="#modal1" id="myBtn"><img class="foodImg1" src="${filteredRecipes[i].recipe.image}"><label for="foodImg1">${filteredRecipes[i].recipe.label}</label></a>'`))
        // }

        $('.foodImg1').attr('src', filteredRecipes[0].recipe.image)
        $('.a').html(filteredRecipes[0].recipe.label)
        $('.foodImg2').attr('src', filteredRecipes[1].recipe.image)
        $('.b').html(filteredRecipes[1].recipe.label)
        $('.foodImg3').attr('src', filteredRecipes[2].recipe.image)
        $('.c').html(filteredRecipes[2].recipe.label)
        $('.foodImg4').attr('src', filteredRecipes[3].recipe.image)
        $('.d').html(filteredRecipes[3].recipe.label)
        $('.foodImg5').attr('src', filteredRecipes[4].recipe.image)
        $('.e').html(filteredRecipes[4].recipe.label)
        $('.carousel').carousel();


    });
})
$('#carouselLabel').on('click', function (e) {
    e.preventDefault();
    console.log(filteredRecipes)
    var carouselSelect = $(this).html();
    filteredRecipe = filteredRecipes.filter(item => item.recipe.label == carouselSelect);
    console.log(filteredRecipes)
    // $('.ingredientsHead').html($(this).html());
    $('#test-swipe-1').html($('<div class="ingredDiv">'));
    $('.ingredDiv').append(`<h5>${carouselSelect}</h5>`)
    $('.ingredDiv').append(`<ol class="ingredientList"></ol>`);
    $('#test-swipe-2').html($('<div id="prepDiv" class="row">'));
    $('#prepDiv').append($(`<p>Use the listed ingredients and follow along to make this version of ${carouselSelect} </p>`))
    var urlButton = $(`<button><a class="urlBtn" target="_blank" href="${filteredRecipes[0].recipe.url}">GO</a></button>`);
    $('#prepDiv').append(urlButton);
    $('#prepDiv').append($('<p class="youtubP">Or follow along on a similar YouTube Recipe</p>'))
    $('#test-swipe-3').html($('<div class="row" id="nutContainer">'));
    $('#nutContainer').append($('<div class="col s3" id="healthDiv">'));
    $('#healthDiv').append(`<h5>Dietary Info</h5>`);
    $('#healthDiv').append(`<ol class="dietaryList"></ol>`);
    $('#nutContainer').append($('<div class="col s3" id="nutDiv">'));
    $('#nutDiv').append(`<h5>Dietary Type</h5>`);
    $('#nutDiv').append(`<ol class="nutList"></ol>`);
    $('#nutContainer').append($('<div class="col s3" id="addDiv">'));
    $('#addDiv').append(`<h5>Nutrition Info</h5>`);
    $('#addDiv').append(`<ol class="addList"></ol>`);
    $(".addList").append($(`<li>Calories: ${filteredRecipes[0].recipe.calories}</li>`));
    $(".addList").append($(`<li>Fat: ${filteredRecipes[0].recipe.totalNutrients.FAT.quantity}</li>`));
    // $(".addList").append($(`<li>Protein: ${filteredRecipes[0].recipe.totalNutrients.PROCNT.quantity}</li>`));

    
    for (var i = 0; i < filteredRecipes[0].recipe.ingredientLines.length; i++) {
        $(".ingredientList").append($(`<li>${filteredRecipes[0].recipe.ingredientLines[i]}</li>`));
    }
    for (var i = 0; i < filteredRecipes[0].recipe.healthLabels.length; i++) {
        $(".dietaryList").append($(`<li>${filteredRecipes[0].recipe.healthLabels[i]}</li>`));
    }
    for (var i = 0; i < filteredRecipes[0].recipe.dietLabels.length; i++) {
        $(".nutList").append($(`<li>${filteredRecipes[0].recipe.dietLabels[i]}</li>`));
    }
    
})



var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$("#resultsDiv").on("click", ".carousel-item label", function (event) {
    event.preventDefault();
    modal.style.display = "block";

});
$("#myModal").on("click", ".close", function () {
    modal.style.display = "none";
});




// // When the user clicks the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 1. protein selected
// 2. click of search loads carousel and populates with protein
// //// b. if no protein selected, prompts modal please select a protein
// 3. filter ajax call with additional inputs
// 4.


