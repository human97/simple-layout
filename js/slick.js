$('.slider1').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
});

let menu = document.getElementById('menu')
menu.onclick = function myFunction() {
    let x = document.getElementById('myTopnav')
    x.classList.toggle('responsive')
}