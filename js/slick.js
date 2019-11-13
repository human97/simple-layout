$('.slider1').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
});


// функция открытия/закрытия адаптивного меню
let menu = document.getElementById('menu')
menu.onclick = function myFunction() {
    let x = document.getElementById('myTopnav')
    x.classList.toggle('responsive')
}