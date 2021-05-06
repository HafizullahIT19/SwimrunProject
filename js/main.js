
//Loading box 
const loadingBox = document.querySelector('#loadingBox')

const loading = lottie.loadAnimation({
    container: loadingBox, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_Q2FX6B.json' // the path to the animation json
});
//End of loading box 










//Onload
window.onload = () => {
    loadingBox.style.display = 'none';
    console.log('page is fully loaded');
};
//End of onload



//Show menu
function showMenu() {
    console.log('Menu');
    const menu = document.getElementById('menu');
    if (menu.className === 'header-menu') {
        menu.className += ' show';
    } else {
        menu.className = 'header-menu';
    }
}
//End of show menu








// ----------------- Video Start -------------------

const video = document.querySelector('#video');
const videoContent = document.querySelector('#video-content');
const playBtn = document.querySelector('#play');
const volumeBtn = document.querySelector('#volume');

//Play Btn
// playBtn.addEventListener('click', function () {
//     if (video.paused) {
//         video.play();
//         playBtn.classList.remove('fas', 'fa-pause-circle');
//         playBtn.classList.add('fas', 'fa-play-circle');
//         videoContent.style.display = 'none';
//         console.log('Play');
//     } else {
//         video.pause();
//         playBtn.classList.remove('fas', 'fa-play-circle');
//         playBtn.classList.add('fas', 'fa-pause-circle');
//         videoContent.style.display = 'inline';
//         console.log('Pause');
//     }
// });

//Volume Btn
// volumeBtn.addEventListener('click', function () {
//     if (video.paused) {
//         video.play();
//         volumeBtn.classList.remove('fas', 'fa-volume-mute');
//         volumeBtn.classList.add('fas', 'fa-volume-down');
//         console.log('Volume Down');
//     } else {
//         video.pause();
//         volumeBtn.classList.remove('fas', 'fa-volume-down');
//         volumeBtn.classList.add('fas', 'fa-volume-mute');
//         console.log('Volume Mute');
//     }
// });

//Video End

// ----------------- Login Btn Start -------------------

// Login Btn End




// ----------------- Footer start ----------------- 

// Button Goes Up 
const btnGoesUp = document.querySelector('#btnGoesUp');
const landingLayer = document.querySelector("#landing-layer");

//Link Learnig scrollIntoView: https://www.instagram.com/p/CJWR1oPA5qe/?utm_source=ig_web_copy_link

//onscroll Event
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    if (scrollY > 332) {
        btnGoesUp.style.display = 'inline';
        // console.log('storeeeee');
        btnGoesUp.addEventListener('click', ()=>{
            console.log('helllo');
            landingLayer.scrollIntoView({
                behavior: 'smooth',
            })
        })
    } else {
        btnGoesUp.style.display = 'none';
        // console.log('mindreeeee');
    }
    // console.log(scrollY);
});
// End Button Goes Up 

//----------------- End of footer ----------------- 
