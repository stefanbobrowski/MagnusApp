$(document).ready(function() {
    $('.hero-chevron').on('click', function() {
        scrollTo('item-shop');
    });

    var header = $('header.main');
    var addItemForm = $('.add-item-form');

    $(window).on('scroll load', function() {
        if ($(document).scrollTop() > 80) {
            header.addClass('slide-in');
        } else {
            header.removeClass('slide-in');
            $('.shopping-cart').removeClass('visible');
        }
    });

    $('.toggle-add-item-form').on('click', function(e) {
        addItemForm.slideToggle('fast');
        e.preventDefault();
    });

    /**
     * Scrolls to an element specified by the given id
     *
     * @param id
     * @returns {boolean}
     */
    function scrollTo(id){
        $('html,body').animate({scrollTop: $("#"+id).offset().top}, 600);
        return false;
    }

    /* Shopping Cart open */
    $('.view-cart').on('click', function(e) {
        $('.shopping-cart').toggleClass('visible');
        e.preventDefault();
    })

});
