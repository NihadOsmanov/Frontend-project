//carousel-1
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 30,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
  $(".my-next-button").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });

  $(".my-previous-button").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });

// product slider

const nexticon = '<i class="fas fa-chevron-right"></i>';
const previcon = '<i class="fas fa-chevron-left"></i>';

$(".products-slider").owlCarousel({
  loop: false,
  items: 4,
  nav: false,
  margin: 30,
  nav: true,
  navText: [previcon, nexticon]
});


});

//carousel-2
$(function () {
 
});

$(document).ready(function () {
  $(".gallery-2").fancybox({
    transitionIn: "elastic",
    transitionEffect: "fade",
    transitionOut: "elastic",
    speedIn: 600,
    speedOut: 200,
    overlayShow: true,
    opacity: true,
    cyclic: true,
  });

  $.fancybox.defaults.buttons = ["zoom", "slideShow", "close"];
});



//Newletter

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: false,
      },
      600: {
        items: 2,
        nav: false,
        loop: false,
      },
      768: {
        items: 3,
        nav: false,
        loop: false,
      },
      1100: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
});


//login
function validation() {
  let email = document.getElementById("email").value;

  if (email == "") {
    document.getElementById("mail").innerHTML =
      "No account found with that email.";
    document.getElementById("email").style.borderColor = "red";
    return false;
  }
}

//contact us


// let myForm = document.querySelector("#signUp");
// let btnSubmit = document.querySelector(".btnSubmit");

// myForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   checkInputs();
// });

function validationSecond() {
  let email = document.getElementById("email").value;
  let textarea = document.getElementById("textarea").value;

  if (email == "") {
    document.getElementById("mail").innerHTML =
      "No account found with that email.";
    document.getElementById("email").style.borderColor = "red";
  }

  if (textarea == "") {
    document.getElementById("textArea").innerHTML =
      "No account found with that email.";
    document.getElementById("textarea").style.borderColor = "red";
  }
}

//faq start
$(document).ready(function(){

  

  $("#heading-1").on('click', function(){
    $(".toggle-1").toggleClass('plus');
    $(".card-1").toggle();
    if($(".card-2").css('display', 'block')){
      $(".card-2").css('display', 'none')
    }
  });

  $("#heading-2").on('click', function(){
    $(".toggle-2").toggleClass('plus');
    $(".card-2").toggle();
    if ($(".card-1").css('display', 'block')){
      $(".card-1").css('display', 'none')
    }
  });

  $("#heading-3").click(function(){
    $(".toggle-3").toggleClass('plus');
    $(".card-3").toggle();
  });

  $("#heading-4").click(function(){
    $(".toggle-4").toggleClass('plus');
    $(".card-4").toggle();
  });

  $("#heading-5").click(function(){
    $(".toggle-5").toggleClass('plus');
    $(".card-5").toggle();
  });

  $("#heading-6").click(function(){
    $(".toggle-6").toggleClass('plus');
    $(".card-6").toggle();
  });

  $("#heading-7").click(function(){
    $(".toggle-7").toggleClass('plus');
    $(".card-7").toggle();
  });

  $("#heading-8").click(function(){
    $(".toggle-8").toggleClass('plus');
    $(".card-8").toggle();
  });

  $("#heading-9").click(function(){
    $(".toggle-9").toggleClass('plus');
    $(".card-9").toggle();
  });

  $("#heading-10").click(function(){
    $(".toggle-10").toggleClass('plus');
    $(".card-10").toggle();
  });

  $("#heading-11").click(function(){
    $(".toggle-11").toggleClass('plus');
    $(".card-12").toggle();
  });

  $("#heading-12").click(function(){
    $(".toggle-12").toggleClass('plus');
    $(".card-13").toggle();
  });

  $("#heading-13").click(function(){
    $(".toggle-13").toggleClass('plus');
    $(".card-14").toggle();
  });

  $("#heading-14").click(function(){
    $(".toggle-14").toggleClass('plus');
    $(".card-15").toggle();
  });

  $("#heading-15").click(function(){
    $(".toggle-15").toggleClass('plus');
    $(".card-16").toggle();
  });

  $("#heading-16").click(function(){
    $(".toggle-16").toggleClass('plus');
    $(".card-17").toggle();
  });

  $(".sidebar-button").click(function(){
    $("#page-sidebar").css({"width" : "350px", "height" : "100vh", "margin-top" : "-200px", "margin-bottom" : "200px","z-index": "110"})
    $(".faqSection").css({"background-color": "black",  "opacity": "0.6", "width" : "100vw", "height" : "200vh", "position" : "absolute", "z-index": "109" })
  });

  $(".close-button").click(function(){
    $("#page-sidebar").css("width" , "0");
    $(".faqSection").css({"display": "none"})
  });

});