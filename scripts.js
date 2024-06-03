
$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slider .predmet');
    const slideCount = slides.length;

    function showNextSlide() {
        slides.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % slideCount;
        slides.eq(currentIndex).addClass('active');
    }

    slides.eq(currentIndex).addClass('active');
    setInterval(showNextSlide, 5000);
});

