// const navToggle = document.querySelector('.burger-nav')

// navToggle.addEventListener('click', _ => {
//   console.log('test')
// })
$(document).ready(function() {
  $(".burger-nav").on("click", function() {
    $(".nav_links ul").toggleClass("open");
  });
});

if ($('#logo``').is(':visible'))
{
   $('body').addClass("fixedPosition");
}
else
{
   $('body').removeClass("fixedPosition");
}

// $(document).ready(function(){
// 	$(window).on("scroll",function(){
//   	var wn = $(window).scrollTop();
//     if(wn > 120){
//     	$(".nav_links").css("background","rgba(46,60,64,.5)");
//       $(".nav_links a").css("color","#fff");
//     }
//     else{
//     	$(".nav_links").css("background","rgba(255,255,255,0)");
//       $(".nav_links a").css("color","#2e3c40");
//     }
//   });
// });
