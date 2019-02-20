$(document).ready(function () {

    //OWL SLIDER
    $('.owl-carousel.slide').owlCarousel({
        loop: true,
        items: 5,
        dots: true,
        autoplay: true,
        smartSpeed: 800,
        margin: 30,
        center: true,
        responsiveClass: true,
        centerMode: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            900: {
                items: 5
            }
        }
    });

    //Slick slider
    /*$('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 500,
        arrows: false,
       fade: true,
       autoplay: true,       
        asNavFor: '.slider-nav'

    });
    //
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        speed: 500,
        focusOnSelect: true,
        centerMode: true,
        slide: 'div',
        autoplay: true
    });*/
});