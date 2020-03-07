/*.........id=#home.....*/
$('#bs4-vertical-slide-carousel').carousel({
    interval: 2000
})

$('#btnPrev').on('click', function () {
    $('#bs4-vertical-slide-carousel').carousel(0);
})

$('#btnPause').on('click', function () {
    $('#bs4-vertical-slide-carousel').carousel('pause');
})

$('#btnNext').on('click', function () {
    $('#bs4-vertical-slide-carousel').carousel(2);
})

$('#bs4-vertical-slide-carousel').on('slid.bs.carousel', function (event) {
    var nextactiveslide = $(event.relatedTarget).index();
    var $btns = $('.carousel-buttons');
    var $active = $btns.find("[data-slide-to='" + nextactiveslide + "']");
    $btns.find('.img-circle').removeClass('active');
    $active.find('.img-circle').addClass('active');
});


/*.......category.........*/
// optional
    $('#blogCarousel').carousel({
        interval: 5000
    });


$(window).scroll(function(){
    if ($(this).scrollTop()>300) {
        $(".arrowtop").show();
    }
    else
    {
        $(".arrowtop").hide();
    }
})

/*.......$(window).scroll(function(){
    if($(this).scrollTop()>150) {
        $(".bg-light").addClass("navbar");
    }
    else
    {
        $(".bg-light").removeClass("navbar");
    }
})
.........*?