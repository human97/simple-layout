$('.slider1').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed:2000,
});

menu.onclick = function myFunction(){
var x = document.getElementById('myTopnav');
if(x.className === 'boxTopnav'){
x.className += ' responsive';
}else{
x.className = 'boxTopnav';
}
}
