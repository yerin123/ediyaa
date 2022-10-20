$(function(){

setInterval(function(){
  $(".imgs").animate({"left":"-1920px"},1000,function(){
    $(this).append($(".imgs > li:first")).css("left",0);
  })
},4500);

$(".main > li, .bg").mouseenter(function(){
  $(".sub, .bg").stop().slideDown("fast");
});

$(".main > li, .bg").mouseleave(function(){
  $(".sub, .bg").stop().slideUp("fast");
})

})