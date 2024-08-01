//헤더
$(window).scroll(function () {
  let scrollT = $(this).scrollTop();
  if (scrollT > 500) {
    $("#header").addClass("fixed")
  } else {
    $("#header").removeClass("fixed")
  }
});

//2,3차 메뉴 슬라이드 업다운
$(".depth2, .depth2_bg").hide();
$(".gnb>li").mouseenter(function () {
  $(".depth2, .depth2_bg").stop().slideDown(1000);
});
$(".gnb>li").mouseleave(function () {
  $(".depth2, .depth2_bg").stop().slideUp(1000);
});
//모바일gnb
/* $(".ham").hide(); */
$(".btn_ham").click(function () {
  $(".ham").fadeIn();
});
/* $(".mdepth2").hide(); */
$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
  $(this).addClass("active").siblings().removeClass("active");
});
$(".ham_close").click(function () {
  $(".ham").fadeOut();
});
//메인비주얼
$(".banner_list>li:nth-child(1)").addClass("active");
$(".banner_list>li:nth-child(1) .rotate").hide();
$(".banner_list>li").click(function () {
  $(this).find(".rotate").stop().fadeOut();
  $(this).siblings().find(".rotate").stop().fadeIn();
  $(this).addClass("active").siblings().removeClass("active");
});
//모바일-메인비주얼
const mobile_banner_list = new Swiper(".mobile_banner_list", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});
//;전시
$(".poster_txt li:not(:first-child").hide();
$(".poster_list li").click(function () {
  $(this).addClass("big").siblings().removeClass("big");
  /*   let idx = $(this).index();
    $(".poster_txt li").eq(idx).show().siblings().hide(); */
});
const poster_list = new Swiper(".poster_list", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2.5,
    },
  },
});
const poster_name = new Swiper(".poster_name", {
  slidesPerView: 1,
  thumbs: {
    swiper: poster_list,
  },
});
/* poster_list.controller.control = poster_name;
poster_name.controller.control = poster_list; */
//프로그램
$("#program .program_list li:not(:first-child) .program_detail").hide();
$("#program .program_name").click(function () {
  $(this).siblings().fadeIn(500).parent().siblings().find(".program_detail").fadeOut(0);
  $(this).addClass("active").parent().siblings().find(".program_name").removeClass("active")
});
//캘린더>스케쥴
$(".schedule_list li:not(:first-child) .opened").hide();
$(".schedule_list li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(this).find(".opened").slideDown(500);
  $(this).siblings().find(".opened").slideUp(500);
});
$(".calendar_schedule > li:not(:first-child").hide();
$(".calendar_date>li").click(function () {
  let idx = $(this).index();
  $(".calendar_schedule>li").eq(idx).fadeIn(500).siblings().fadeOut(0);
  $(this).addClass("active").siblings().removeClass("active");
});
//캘린더-날짜
// const date_list = new Swiper(".date_list", {
//   slidesPerView:5,
// });
//소장품
const collection_list = new Swiper(".collection_list", {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 50,
  centeredSlides: true,
  /*   autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    }, */
  speed: 1000,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      centeredSlides: true,

    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
    },
  },
});
