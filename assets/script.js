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
    //mccabe key
    // var appKEY = "14ea6a2a8ec5df04798b53f1975f47fb";
    // ben key
    var appKEY = "fe36f64c5f90677aea3f7c92e3406936";
    // mccabe id
    // var apiID = "0a8d88d0";
    // ben id
    var apiID = "ec9c4f3e";
    
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
$('.carousel').on('click', '#carouselLabel', function (e) {
    e.preventDefault();
    var carouselSelect = $(this).html();
    filteredRecipe = filteredRecipes.filter(item => item.recipe.label == carouselSelect);
    console.log(filteredRecipe)
    $('#test-swipe-1').html($('<div class="ingredDiv">'));
    $('.ingredDiv').append(`<h5>${carouselSelect}</h5>`)
    $('.ingredDiv').append(`<ol class="ingredientList"></ol>`)
    $('.ingredDiv').append(`<link rel="stylesheet" href="print.css" type="text/css" media="print">
    <a href="#" id="print-button" onclick="window.print();return false;">Print this page</a>`)
    $('#test-swipe-2').html($('<div id="prepDiv" class="row">'));
    $('#prepDiv').append($(`<p class="pdiv">Use the listed ingredients and follow along to make this version of ${carouselSelect} </p>`))
    var urlButton = $(`<button class="btnURL waves-effect waves-light btn-small modal-trigger">GO</button>`);
    $('#prepDiv').append(urlButton);
    $('#prepDiv').append($('<p class="youtubeP">Or follow along on a similar YouTube Recipe</p>'))
    // yoututbe call
    var userSearchTerm = filteredRecipe[0].recipe.label;
    userSearchTerm = userSearchTerm.split(" ").join("+")
    var urlVid = `https://www.youtube.com/embed?listType=search&list=${userSearchTerm}`
    console.log(urlVid)
    $('.youtubeP').append(`<iframe id="player" type="text/html" width="640" height="390"
    src="${urlVid}" frameborder="0"></iframe>`)
    // youtube call
    $('#test-swipe-3').html($('<div class="row" id="nutContainer">'));
    $('#nutContainer').append($('<div class="col s3" id="healthDiv">'));
    $('#healthDiv').append(`<h5>Dietary Info</h5>`);
    $('#healthDiv').append(`<ol class="dietaryList"></ol>`);
    $('#nutContainer').append($('<div class="col s3" id="nutDiv">'));
    $('#nutDiv').append(`<h5>Dietary Type</h5>`);
    $('#nutDiv').append(`<ol class="nutList"></ol>`);
    $('#nutContainer').append($('<div class="col s3" id="addDiv">'));
    $('#addDiv').append(`<h5>Nutrition Info</h5>`);
    $('#addDiv').append(`<ul class="addList"></ul>`);
    $(".addList").append($(`<li>Calories: ${filteredRecipes[0].recipe.calories.toFixed(1)}</li>`));
    $(".addList").append($(`<li>Protein: ${filteredRecipes[0].recipe.totalNutrients.PROCNT.quantity.toFixed(1)} g</li>`));
    $(".addList").append($(`<li>Fat: ${filteredRecipes[0].recipe.totalNutrients.FAT.quantity.toFixed(1)} g</li>`));
    $(".addList").append($(`<li>Sat.Fat: ${filteredRecipes[0].recipe.totalNutrients.FASAT.quantity.toFixed(1)} g</li>`));
    $(".addList").append($(`<li>Sugar: ${filteredRecipes[0].recipe.totalNutrients.SUGAR.quantity.toFixed(1)} g</li>`));
    $(".addList").append($(`<li>Sodium: ${filteredRecipes[0].recipe.totalNutrients.NA.quantity.toFixed(1)} mg</li>`));
    $(".addList").append($(`<li>Cholesterol: ${filteredRecipes[0].recipe.totalNutrients.CHOLE.quantity.toFixed(1)} mg</li>`));
    $(".addList").append($(`<li>Calcium: ${filteredRecipes[0].recipe.totalNutrients.CA.quantity.toFixed(1)} mg</li>`));
    $(".addList").append($(`<li>Magnesium: ${filteredRecipes[0].recipe.totalNutrients.MG.quantity.toFixed(1)} mg</li>`));
    $(".addList").append($(`<li>Potassium: ${filteredRecipes[0].recipe.totalNutrients.K.quantity.toFixed(1)} mg</li>`));
    $(".addList").append($(`<li>Iron: ${filteredRecipes[0].recipe.totalNutrients.FE.quantity.toFixed(1)} mg</li>`));
    $(".addList").append($(`<li>Zinc: ${filteredRecipes[0].recipe.totalNutrients.ZN.quantity.toFixed()} mg</li>`));

    for (var i = 0; i < filteredRecipes[0].recipe.ingredientLines.length; i++) {
        $(".ingredientList").append($(`<li>${filteredRecipes[0].recipe.ingredientLines[i]}</li>`));
    }
    for (var i = 0; i < filteredRecipes[0].recipe.healthLabels.length; i++) {
        $(".dietaryList").append($(`<li>${filteredRecipes[0].recipe.healthLabels[i]}</li>`));
    }
    for (var i = 0; i < filteredRecipes[0].recipe.dietLabels.length; i++) {
        $(".nutList").append($(`<li>${filteredRecipes[0].recipe.dietLabels[i]}</li>`));
    }
    
    $('.btnURL').on('click', function(e) {
        e.preventDefault();
        window.open(filteredRecipe[0].recipe.url, "_blank");
    })
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

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


