$(document).ready(function(){

new Swiper(".container .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    autoplay: true,
    delay: 5000,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar", //동그라미 버튼을 진행상황을 나타내는 바로 변경
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
});



// 어떻게 구현해야 할지 아무리 머리 굴려도 떠오르지 않아 모조리 넣었습니다. . .
// for이나 if문으로 li의 index를 추출할 수 있으면 좋겠는데. . .


function onClick1() {
  $('.sub_menu>li:nth-child(1)').addClass('active');

  $('.sub_menu>li:nth-child(2)').removeClass('active');
  $('.sub_menu>li:nth-child(3)').removeClass('active');
  $('.sub_menu>li:nth-child(4)').removeClass('active');
  $('.sub_menu>li:nth-child(5)').removeClass('active');
  $('.sub_menu>li:nth-child(6)').removeClass('active');
  $('.sub_menu>li:nth-child(7)').removeClass('active');
  $('.sub_menu>li:nth-child(8)').removeClass('active');
  $('.sub_menu>li:nth-child(9)').removeClass('active');
  $('.sub_menu>li:nth-child(10)').removeClass('active');
}

function onClick2() {
  $('.sub_menu>li:nth-child(2)').addClass('active');

  $('.sub_menu>li:nth-child(1)').removeClass('active');
  $('.sub_menu>li:nth-child(3)').removeClass('active');
  $('.sub_menu>li:nth-child(4)').removeClass('active');
  $('.sub_menu>li:nth-child(5)').removeClass('active');
  $('.sub_menu>li:nth-child(6)').removeClass('active');
  $('.sub_menu>li:nth-child(7)').removeClass('active');
  $('.sub_menu>li:nth-child(8)').removeClass('active');
  $('.sub_menu>li:nth-child(9)').removeClass('active');
  $('.sub_menu>li:nth-child(10)').removeClass('active');
}

function onClick3() {
  $('.sub_menu>li:nth-child(3)').addClass('active');

  $('.sub_menu>li:nth-child(1)').removeClass('active');
  $('.sub_menu>li:nth-child(2)').removeClass('active');
  $('.sub_menu>li:nth-child(4)').removeClass('active');
  $('.sub_menu>li:nth-child(5)').removeClass('active');
  $('.sub_menu>li:nth-child(6)').removeClass('active');
  $('.sub_menu>li:nth-child(7)').removeClass('active');
  $('.sub_menu>li:nth-child(8)').removeClass('active');
  $('.sub_menu>li:nth-child(9)').removeClass('active');
  $('.sub_menu>li:nth-child(10)').removeClass('active');
}

function onClick4() {
  $('.sub_menu>li:nth-child(4)').addClass('active');

  $('.sub_menu>li:nth-child(1)').removeClass('active');
  $('.sub_menu>li:nth-child(3)').removeClass('active');
  $('.sub_menu>li:nth-child(2)').removeClass('active');
  $('.sub_menu>li:nth-child(5)').removeClass('active');
  $('.sub_menu>li:nth-child(6)').removeClass('active');
  $('.sub_menu>li:nth-child(7)').removeClass('active');
  $('.sub_menu>li:nth-child(8)').removeClass('active');
  $('.sub_menu>li:nth-child(9)').removeClass('active');
  $('.sub_menu>li:nth-child(10)').removeClass('active');
}

function onClick5() {
  $('.sub_menu>li:nth-child(5)').addClass('active');

  $('.sub_menu>li:nth-child(1)').removeClass('active');
  $('.sub_menu>li:nth-child(3)').removeClass('active');
  $('.sub_menu>li:nth-child(4)').removeClass('active');
  $('.sub_menu>li:nth-child(2)').removeClass('active');
  $('.sub_menu>li:nth-child(6)').removeClass('active');
  $('.sub_menu>li:nth-child(7)').removeClass('active');
  $('.sub_menu>li:nth-child(8)').removeClass('active');
  $('.sub_menu>li:nth-child(9)').removeClass('active');
  $('.sub_menu>li:nth-child(10)').removeClass('active');
}

function onClick6() {
  $('.sub_menu>li:nth-child(6)').addClass('active');

  $('.sub_menu>li:nth-child(1)').removeClass('active');
  $('.sub_menu>li:nth-child(3)').removeClass('active');
  $('.sub_menu>li:nth-child(4)').removeClass('active');
  $('.sub_menu>li:nth-child(5)').removeClass('active');
  $('.sub_menu>li:nth-child(2)').removeClass('active');
  $('.sub_menu>li:nth-child(7)').removeClass('active');
  $('.sub_menu>li:nth-child(8)').removeClass('active');
  $('.sub_menu>li:nth-child(9)').removeClass('active');
  $('.sub_menu>li:nth-child(10)').removeClass('active');
}

function onClick7() {
  $('.sub_menu>li:nth-child(7)').addClass('active');

  $('.sub_menu>li:nth-child(1)').removeClass('active');
  $('.sub_menu>li:nth-child(3)').removeClass('active');
  $('.sub_menu>li:nth-child(4)').removeClass('active');
  $('.sub_menu>li:nth-child(5)').removeClass('active');
  $('.sub_menu>li:nth-child(6)').removeClass('active');
  $('.sub_menu>li:nth-child(2)').removeClass('active');
  $('.sub_menu>li:nth-child(8)').removeClass('active');
  $('.sub_menu>li:nth-child(9)').removeClass('active');
  $('.sub_menu>li:nth-child(10)').removeClass('active');
}

function onClick8() {
  $('.sub_menu>li:nth-child(8)').addClass('active');

  $('.sub_menu>li:nth-child(1)').removeClass('active');
  $('.sub_menu>li:nth-child(3)').removeClass('active');
  $('.sub_menu>li:nth-child(4)').removeClass('active');
  $('.sub_menu>li:nth-child(5)').removeClass('active');
  $('.sub_menu>li:nth-child(6)').removeClass('active');
  $('.sub_menu>li:nth-child(7)').removeClass('active');
  $('.sub_menu>li:nth-child(2)').removeClass('active');
  $('.sub_menu>li:nth-child(9)').removeClass('active');
  $('.sub_menu>li:nth-child(10)').removeClass('active');
}

function onClick9() {
  $('.sub_menu>li:nth-child(9)').addClass('active');

  $('.sub_menu>li:nth-child(1)').removeClass('active');
  $('.sub_menu>li:nth-child(3)').removeClass('active');
  $('.sub_menu>li:nth-child(4)').removeClass('active');
  $('.sub_menu>li:nth-child(5)').removeClass('active');
  $('.sub_menu>li:nth-child(6)').removeClass('active');
  $('.sub_menu>li:nth-child(7)').removeClass('active');
  $('.sub_menu>li:nth-child(8)').removeClass('active');
  $('.sub_menu>li:nth-child(2)').removeClass('active');
  $('.sub_menu>li:nth-child(10)').removeClass('active');
}

function onClick10() {
  $('.sub_menu>li:nth-child(10').addClass('active');

  $('.sub_menu>li:nth-child(1)').removeClass('active');
  $('.sub_menu>li:nth-child(3)').removeClass('active');
  $('.sub_menu>li:nth-child(4)').removeClass('active');
  $('.sub_menu>li:nth-child(5)').removeClass('active');
  $('.sub_menu>li:nth-child(6)').removeClass('active');
  $('.sub_menu>li:nth-child(7)').removeClass('active');
  $('.sub_menu>li:nth-child(8)').removeClass('active');
  $('.sub_menu>li:nth-child(9)').removeClass('active');
  $('.sub_menu>li:nth-child(2)').removeClass('active');
}


document.querySelector('.sub_menu>li:nth-child(1)').addEventListener('click', onClick1);
document.querySelector('.sub_menu>li:nth-child(2)').addEventListener('click', onClick2);
document.querySelector('.sub_menu>li:nth-child(3)').addEventListener('click', onClick3);
document.querySelector('.sub_menu>li:nth-child(4)').addEventListener('click', onClick4);
document.querySelector('.sub_menu>li:nth-child(5)').addEventListener('click', onClick5);
document.querySelector('.sub_menu>li:nth-child(6)').addEventListener('click', onClick6);
document.querySelector('.sub_menu>li:nth-child(7)').addEventListener('click', onClick7);
document.querySelector('.sub_menu>li:nth-child(8)').addEventListener('click', onClick8);
document.querySelector('.sub_menu>li:nth-child(9)').addEventListener('click', onClick9);
document.querySelector('.sub_menu>li:nth-child(10)').addEventListener('click', onClick10);



});