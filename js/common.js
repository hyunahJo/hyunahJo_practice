$("ul.mainMenu>li").mouseover(function(){
    $("ul.subMenu").stop().slideDown();
    $("div.layer").stop().slideDown();
});
$("ul.mainMenu>li").mouseout(function(){
    $("ul.subMenu").stop().slideUp();
    $("div.layer").stop().slideUp();
});


// var now = 0;
// var cnt = 1;

// setInterval("fnSlide()",3000);

// function fnSlide() {
//     now==cnt ? now==0 : ++now;

//     $("div.slideStage a").eq(now).animate({"margin-left":"0",},1000);
//     $("div.slideStage a").eq(now-1).animate({"margin-left":"-1920px",},1000,function(){$(this).css({"margin-left":"1920px"})});
// }

// function fnMenu(){
//     $(this).children("li>a>img").css({"width":"300px"});
// }

var mouseover = document.querySelector(".mouseover");
var hide = document.querySelector(".hide");

mouseover.addEventListener("mouseover", function() {
    mouseover.style.display = "none";
    hide.style.display="block"
});

mouseover.addEventListener("mouseout", function() {
    mouseover.style.display = "block";
    hide.style.display="none"
});

