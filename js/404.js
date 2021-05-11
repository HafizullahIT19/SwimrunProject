
//404 box 
window.scrollTo(0,200);
const box = document.querySelector('#box')
const loading = lottie.loadAnimation({
    container: box, 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/packages/lf20_g3epl9yu.json' 
});
//End of loading box 


// Show Logo Start
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const logoSmall = document.querySelector("#headerLogo");
    const menu = document.querySelector("#menu");
    
    if (scrollY > 199.98) {
        logoSmall.className = "header-logo show animate__animated animate__backInLeft"
        menu.className = "header-menu ml-37px"
    } else {
        if(logoSmall.className === "header-logo show animate__animated animate__backInLeft"){
            logoSmall.className = "header-logo show animate__animated animate__backOutLeft"
            // logoSmall.style.display = 'none';
            setTimeout(()=>{
                logoSmall.className = "header-logo"
                menu.className = "header-menu"
            },300)
        }
    }
    console.log(scrollY);
});
// End of show Logo





//Show menu
const showMenu = () =>{
    const menu = document.getElementById("menu");
    if(menu.className ==="header-menu"){
        menu.className += " show"
    }else{
        menu.className = "header-menu"
    }
}
//End of show menu



// ----------------- Footer start ----------------- 

// Button Goes Up 
const btnGoesUp = document.querySelector('#btnGoesUp');
const landingLayer = document.querySelector("#landing-layer");

//Link Learnig scrollIntoView: https://www.instagram.com/p/CJWR1oPA5qe/?utm_source=ig_web_copy_link

//onscroll Event For Btn goes up
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
