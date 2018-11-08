$(".main").onepage_scroll({
   sectionContainer: "section",
   easing: "ease",
   animationTime: 1000,
   pagination: true,
   updateURL: false,
   beforeMove: function(index) {},
   afterMove: function(index) {},
   loop: false,
   keyboard: true,
   responsiveFallback: false,
   direction: "vertical"
});

//section_target page function
var pageNum = 0
$(".screen").click(function(){
  pageNum+=1;
  $(".page").css("left","-"+pageNum*100+"%");
  if(pageNum==4){
    pageNum=-1;
    setTimeout(function(){
      $(".centerline").css("animation","cline 1s forwards")
      $(".point").css("animation","t_opacity 2s 1s forwards")
      $(".target_period").css("animation","t_opacity 2s 1s forwards")
    }, 500);
  }
  
  console.log(pageNum);
});