$(function(){
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 7000,
        speed: 1000,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="next"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="prev"></button>',
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    
                }
            }
        ]
    });
});

$(function () {
    $('.quote-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 640,
                settings: {

                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.menu__btn').click(function(event){
        $('.menu__btn,.header__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__link').click(function (event) {
        $('.menu__btn,.header__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// BUTTON-UP

const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// updateDashoffset
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength / height);

    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

//onScroll
window.addEventListener('scroll', () => {
    updateDashoffset();

    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up--active');
    } else {
        scrollUp.classList.remove('scroll-up--active');
    }
});

//click
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});