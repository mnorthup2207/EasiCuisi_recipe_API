// selector and range in formDiv
$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    $('.tabs').tabs();
});




// event listener for search bar
$('.recipeInputs').on('submit', function (e) {
    e.preventDefault();
    // variables for selectors
    var protein = $('#proteinInput').val();
    var serving = $('#servingInput').val();
    var cooking = $('#cookingInput').val();
    var range = $('#test5').val();

    // AJAX call from 
    var appKEY = "14ea6a2a8ec5df04798b53f1975f47fb";
    var apiID = "0a8d88d0";
    queryURL = `https://api.edamam.com/search?q=${protein}&app_id=${apiID}&app_key=${appKEY}&from=0&to=100&time=1%2B`
    // console.log(query
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        var filteredRecipes = response.hits;
        if (serving) filteredRecipes = filteredRecipes.filter(item => item.recipe.yield == serving)
        if (cooking) filteredRecipes = filteredRecipes.filter(item => item.recipe.totalTime <= cooking)
        if (range) filteredRecipes = filteredRecipes.filter(item => item.recipe.calories <= range)
        console.log(filteredRecipes);

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
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$("#resultsDiv").on("click", ".carousel-item label", function (event) {
    event.preventDefault();
    modal.style.display = "block";
    $(".img1").css("opacity: 30%;");
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


