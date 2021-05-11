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