var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

// var top = document.getElementsByClassName("scrollTop")
// $(window).scroll(function () {
//     if ($(window).scrollTop() > 300) {
//         $('top i').css({
//             "opacity": "1", "pointer-events": "auto"
//         });
//     } else {
//         $('top i').css({
//             "opacity": "0", "pointer-events": "none"
//         });
//     }
// })

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
	    $('.to_top').fadeIn(250);
	}
	else{
	    $('.to_top').fadeOut(250);
	}
    });
    $('.to_top').click(function(){
	$('html,body').animate(
	    {scrollTop:0},400
	);
    });
});