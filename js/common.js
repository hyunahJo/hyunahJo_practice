$("ul.mainMenu>li").mouseover(function () {
  $("ul.subMenu").stop().slideDown();
  $("div.layer").stop().slideDown();
});
$("ul.mainMenu>li").mouseout(function () {
  $("ul.subMenu").stop().slideUp();
  $("div.layer").stop().slideUp();
});

const showing_class = "showing";
const firstSlide = document.querySelector(".slideStage:first-child");

function slide() {
  const currentSlide = document.querySelector(`.${showing_class}`);
  if (currentSlide) {
    currentSlide.classList.remove(showing_class);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(showing_class);
    } else {
      firstSlide.classList.add(showing_class);
    }
  } else {
    firstSlide.classList.add(showing_class);
  }
}

slide();
setInterval(slide, 5000);

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

var mouseover = document.querySelectorAll(".mouseover");
var hide = document.querySelectorAll(".hide");

for (var i = 0; i < mouseover.length; i++) {
  mouseover[i].addEventListener("mouseover", function () {
    this.style.display = "none";
  });
}

for (var i = 0; i < mouseover.length; i++) {
  mouseover[i].addEventListener("mouseout", function () {
    this.style.display = "block";
  });
}
// mouseover.addEventListener("mouseout", function () {
//   mouseover.style.display = "block";
//   hide.style.display = "none";
// });
