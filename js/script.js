$(function () {

    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    ibg();

    // burger
    let burgerContent = $('.header__burger-content--mob');
    burgerContent.css('right', -(burgerContent.outerWidth()+50));
    $('.burger').click(function () {
        $('body').toggleClass('lock');
        burgerContent.toggleClass('active');
        if (burgerContent.hasClass('active')) {
            burgerContent.css('right', 0);
        } else {
            burgerContent.css('right', -(burgerContent.outerWidth()+50));
        }
    });

    $('.header').css('width', $('.wrapper').width());
    $('.wrapper').css('padding-top', $('.header').outerHeight());

    $(window).resize(function() {
        $('.header').css('width', $('.wrapper').width());
        $('.wrapper').css('padding-top', $('.header').outerHeight());
        if (burgerContent.hasClass('active')) {
            burgerContent.css('right', 0);
        } else {
            burgerContent.css('right', -burgerContent.outerWidth());
        }
    });

    // circle text
    $('.main__slide-btn span').circleText({
        content:"КОНСТАНТИН СМОТРЕТЬ ОТЗЫВ КОНСТАНТИНА ",
        padding: 5,
        turn: true,
        duration: 20,
        reverse: true,
        radius: 60
    });

    // sliders
    $('.main__slider').slick({
        centerMode: true,
        speed: 1000,
        variableWidth: true,
        slidesToShow: 1,
        infinite: false,
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
        ]
    });

    $('.choise__slider').slick({
        slidesToShow: 4,
        prevArrow: $('#choise-prev'),
        nextArrow: $('#choise-next'),
        autoplay: true,
        responsive: [
            {
                breakpoint: 1088,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 835,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // pulsate
    $('.discount__img').pulsate({
        reach: 70,
        pause: 700,
        speed: 650, 
    });

    // parallax
    var mainBefore = $('.main__lights').get(0);

    if ($(window).width() > 992.98) {
        var mainParallaxInstance = new Parallax(mainBefore);
    }
    $(window).on('resize', function () {
        if ($(window).width() > 992.98) {
            var mainParallaxInstance = new Parallax(mainBefore);
        }
    });

    // marquee
    $('#choise__marquee-blue').endlessScroll({
        width: "105%", // Ширина строки
        height: "60px", // Высота строки
        steps: -2, // Шаг анимации в пикселях. Если число отрицательное - движение влево, положительное - вправо
        speed: 30, // Скорость анимации (0 - максимальная)
        mousestop: false, // Останавливать ли полосу при наведении мыши (да - true, нет - false)
    });

    $('#choise__marquee-white').endlessScroll({
        width: "105%", // Ширина строки
        height: "60px", // Высота строки
        steps: -2, // Шаг анимации в пикселях. Если число отрицательное - движение влево, положительное - вправо
        speed: 30, // Скорость анимации (0 - максимальная)
        mousestop: false, // Останавливать ли полосу при наведении мыши (да - true, нет - false)
    });
});
