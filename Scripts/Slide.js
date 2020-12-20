window.onload = ()=>{
    if (document.body.clientWidth >= 1200){
$(document).ready(function(){
    $('.carousel').slick({
        vertical : true,
        autoplay : true,
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable : true,
        easing : 'ease-in-out',
        nextArrow : "#arrow-down",
        prevArrow : "#arrow-up"
    })
})
    }
};