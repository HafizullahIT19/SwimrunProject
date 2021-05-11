console.log('index.js');
//Loading box 
const loadingBox = document.querySelector('#loadingBox')

const loading = lottie.loadAnimation({
    container: loadingBox, 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_Q2FX6B.json' 
});
//End of loading box 


//Onload Funtion
window.onload = () => {
    loadingBox.style.display = 'none';
};
//End of onload


// Show Logo Start
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const boxTLeft = document.querySelector("#intro-2-3-col");
    const boxTRTop = document.querySelector("#intro-1-3-item-1");
    const boxTRBottom = document.querySelector("#intro-1-3-item-2");
    const boxBLeft = document.querySelector("#intro-1-3-col-item-1");
    const boxBCenter = document.querySelector("#intro-1-3-col-item-2");
    const boxBRight = document.querySelector("#intro-1-3-col-item-3");
    
    
    const tomTitle = document.querySelector("#TOM");
    const latTitle = document.querySelector("#LAT");
    const socTitle = document.querySelector("#SOC");
    const popTitle = document.querySelector("#POP");
    
    
    if (scrollY > 199.98) {
        boxTLeft.className = "intro-2-3-col intro-h-100 position-relative h-md-300px animate__animated animate__backInDown"
        boxTRTop.className = "intro-1-3-item intro-h-50 position-relative h-md-300px animate__animated animate__backInRight animate__delay-1s"
        boxTRBottom.className = "intro-1-3-item intro-h-50 position-relative h-md-300px animate__animated animate__backInRight animate__delay-2s"

        boxBLeft.className = "intro-1-3-col-item intro-h-100 position-relative h-md-300px animate__animated animate__backInLeft animate__delay-5s";
        boxBCenter.className = "intro-1-3-col-item intro-h-100 position-relative h-md-300px animate__animated animate__backInUp animate__delay-4s";
        boxBRight.className = "intro-1-3-col-item intro-h-100 position-relative h-md-300px animate__animated animate__backInRight animate__delay-3s";
        // console.log('storeeeee');
    } else {
        boxTLeft.className = "intro-2-3-col intro-h-100 position-relative h-md-300px"
        boxTRTop.className = "intro-1-3-item intro-h-50 position-relative h-md-300px"
        boxTRBottom.className = "intro-1-3-item intro-h-50 position-relative h-md-300px"


        boxBLeft.className = "intro-1-3-col-item intro-h-100 position-relative h-md-300px";
        boxBCenter.className = "intro-1-3-col-item intro-h-100 position-relative h-md-300px";
        boxBRight.className = "intro-1-3-col-item intro-h-100 position-relative h-md-300px";

    }

    if (scrollY > 799.98) {
        tomTitle.className = "title animate__animated animate__backInLeft "
        socTitle.className = "title animate__animated animate__backInRight animate__delay-1s"
        popTitle.className = "title animate__animated animate__backInRight animate__delay-2s"
    } else {
        tomTitle.className = "title"
        socTitle.className = "title"
        popTitle.className = "title"
    }
    if (scrollY > 1399.98) {
        latTitle.className = "title animate__animated  animate__backInLeft"
    } else{
        latTitle.className = "title"
    }

    // console.log(scrollY);
});

// End of show Logo