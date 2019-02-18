$(document).ready(function () {

    //OWL SLIDER
    $('.owl-carousel.slide').owlCarousel({
        loop: true,
        items: 5,
        dots: true,
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        center: true,
        responsiveClass: true,
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
    })
});