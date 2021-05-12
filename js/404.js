
//404 box 
const box = document.querySelector('#box')
const loading = lottie.loadAnimation({
    container: box, 
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/packages/lf20_g3epl9yu.json' 
});
//End of box 


//Onload Funtion
window.onload = () => {
    window.scrollTo(0,200);
};
//End of onload