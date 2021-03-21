

$(function(){

    // back to top

$('.back-to-top').click(function(){
$('html, body').animate({scrollTop:0}, 1000);

});

$(window).scroll(function(){

var scrolling = $(this).scrollTop();

if(scrolling > 300){

   $('.back-to-top').fadeIn(500);
}

else{
   $('.back-to-top').fadeOut(500);
}

if(scrolling > 300){

   $('.nav').addClass('bg');
}

else{
   $('.nav').removeClass('bg');
}
});

//preloader

$(window).on('load', function(){
$('.preloader').delay(1500).fadeOut(1000);

});


//animation scroll js

$('a[href*="#"]:not([href="#').on('click', function () {
   if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       if (target.length) {
           htmlBody.animate({
               scrollTop: target.offset().top - 75
           }, 2000);
           return false;
       }
   }
});








});