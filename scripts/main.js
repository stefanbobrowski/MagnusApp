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

    /* Close shopping cart on body click */
    $("body").mouseup(function(e) {
        var subject = $(".shopping-cart.visible");
        if(e.target.id != subject.attr('class') && !subject.has(e.target).length) {
            $('.shopping-cart').removeClass('visible');
        }
    });

    /* Shopping Cart button open */
    $('.view-cart').on('click', function(e) {
        $('.shopping-cart').toggleClass('visible');
        e.preventDefault();
    })    
});
