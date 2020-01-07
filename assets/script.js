// selector and range in formDiv
$(document).ready(function(){
    $('select').formSelect();
  });
// carousel functions
$(document).ready(function(){
    $('.carousel').carousel();
  });

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
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
// for Modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}