 setTimeout(function() { 

      $('header').fadeOut(500); 

      var done = false;

  }, 5000);



$(document).ready(function() {



      $('.js--section_features').waypoint(function(direction){

          if( direction == "down")

          {

             $('nav').addClass('fixed-top');

          }

          else {

             $('nav').removeClass('fixed-top');

          }

       } , {

          offset: '60px;'

      });

      

      $('.js--scroll_to_what_we_offer').click(function () {



         $('html , body').animate({scrollTop: $('.js--scroll_what_we_offer').offset().top} , 1000);

      })



$('.js--wp_1').waypoint(function(direction){

  $('.js--wp_1').addClass('animated fadeIn')

} , {

  offset: '70%;'

}); 









})







function myFunction() {

   var dots = document.getElementById("dots");

   var moreText = document.getElementById("more");

   var btnText = document.getElementById("myBtn");

 

   if (dots.style.display === "none") {

     dots.style.display = "inline";

     btnText.innerHTML = "Read more";

     moreText.style.display = "none";

   } else {

     dots.style.display = "none";

     btnText.innerHTML = "Read less";

     moreText.style.display = "inline";

   }

 }



 function myFunction1() {

   var dots = document.getElementById("dots1");

   var moreText = document.getElementById("more1");

   var btnText = document.getElementById("myBtn1");

 

   if (dots.style.display === "none") {

     dots.style.display = "inline";

     btnText.innerHTML = "Read more";

     moreText.style.display = "none";

   } else {

     dots.style.display = "none";

     btnText.innerHTML = "Read less";

     moreText.style.display = "inline";

   }

 }