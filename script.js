let currentSlide = 0;
const slides = document.querySelectorAll(".header-slider img"); // Select individual slides
const totalSlides = slides.length;

const goNext = () => {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    slideImage();
}

const goPrev = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    slideImage();
}

const slideImage = () => {
    const slideWidth = 100; // Assuming each slide takes 100% width of the container
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    });
}

document.querySelector(".next").addEventListener("click", goNext);
document.querySelector(".prev").addEventListener("click", goPrev);


const ScrollContainer = document.querySelectorAll('.product-slider')
for(const item of ScrollContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
