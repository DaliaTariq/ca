$(document).ready(function () {

    //OWL SLIDER
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        autoplayHoverPause:true,
        smartSpeed:350,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});