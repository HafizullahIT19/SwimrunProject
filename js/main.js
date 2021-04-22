
const iconGoesUp = document.querySelector("#iconGoesUp");


//onscroll Event
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    
    if (scrollY > 332) {
        iconGoesUp.style.display = "inline";
        console.log('storeeeee');
    } else {
        console.log('mindreeeee');
        iconGoesUp.style.display = "none";
    }
    console.log(scrollY);
});



//example
// const btn = document.querySelector('#icon');

// btn.addEventListener('click', function () {
//     console.log('Helloooooo');
// });
