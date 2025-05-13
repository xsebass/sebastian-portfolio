const slideIndexes = {};

function plusDivs(className, n) {
    if (!(className in slideIndexes)) slideIndexes[className] = 1;
    showDivs(className, slideIndexes[className] += n);
}

function showDivs(className, n) {
    const slides = document.getElementsByClassName(className);
    if (slides.length === 0) return;

    if (n > slides.length) slideIndexes[className] = 1;
    if (n < 1) slideIndexes[className] = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

        if (slides[i].tagName.toLowerCase() === 'video') {
            slides[i].pause();
        }
    }

    const currentSlide = slides[slideIndexes[className] - 1];
    currentSlide.style.display = "block";

    if (currentSlide.tagName.toLowerCase() === 'video') {
        currentSlide.currentTime = 0;
    }
}

window.onload = function () {
    const allGroups = ['slide-tic', 'slide-car']; 
    allGroups.forEach(className => {
        slideIndexes[className] = 1;
        showDivs(className, 1);
    });
};
