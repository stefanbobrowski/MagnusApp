$(document).ready(function() {

    var header = $('header.main');
    var addItemForm = $('.add-item-form');

    /* Header/Cart slide in/out on scroll */
    $(window).on('scroll load', function() {
        if ($(document).scrollTop() > 80) {
            header.addClass('slide-in');
        } else {
            header.removeClass('slide-in');
            $('.shopping-cart').removeClass('visible');
        }
    });

    /* Scrolls to an element specified by the given id */
    function scrollTo(id){
        $('html,body').animate({scrollTop: $("#"+id).offset().top}, 600);
        return false;
    }

    $('.hero-chevron').on('click', function() {
        scrollTo('item-shop');
    });

    /* Toggle Add item form */
    $('.toggle-add-item-form').on('click', function(e) {
        addItemForm.slideToggle('fast');
        e.preventDefault();
    });


    /* Shopping Cart open */
        $('body').on('click', function(e) {
            var target = $(e.target);

            if (target.hasClass('view-cart')) {
                $('.shopping-cart').toggleClass('visible');
                e.preventDefault();
            } else if (target.closest('.shopping-cart').length < 1) {
                $('.shopping-cart').removeClass('visible');
            }
        });
});
