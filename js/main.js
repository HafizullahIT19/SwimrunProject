
console.log("Hello");

function showMenu() {
    console.log('Menu');
    const menu = document.getElementById('menu');
    if (menu.className === 'header-menu') {
        menu.className += ' show';
    } else {
        menu.className = 'header-menu';
    }
}

// ----------------- Scroll Event Start -------------------
const iconGoesUp = document.querySelector('#iconGoesUp');

//onscroll Event
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    if (scrollY > 332) {
        iconGoesUp.style.display = 'inline';
        // console.log('storeeeee');
    } else {
        iconGoesUp.style.display = 'none';
        // console.log('mindreeeee');
    }
    // console.log(scrollY);
});

// Scroll Event End

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
