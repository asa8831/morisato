$(function () {

  // ==============================
  // メニューを固定する
  // ==============================
  var headerHight = $('.header').height();
  var fvHeight = $('.fv').height();
  var fixedPoint = fvHeight - headerHight;
  var widthIpad = 768;

  $(window).on('scroll', function () {

    // pc画面の時のみ固定表示
      if ($(window).width() > widthIpad && $(this).scrollTop() > fixedPoint) {
        // nav 
        $('.js-nav-wrapper').addClass('js-is-fixed');
  
      } else {
        $('.js-nav-wrapper').removeClass('js-is-fixed');
      }

  });
  // ページの途中でリロードしたときにメニューが消えてしまうのを防ぐ
  $(window).trigger('scroll');


  // ==============================
  // ふわっと下から浮いてくる文章
  // ==============================

  $(window).scroll(function () {

    var messageTop = $('.js-fade-in-message').offset().top;
    var scrollHeight = $(window).scrollTop();
    var windowHeight = $(window).height();

    $('.js-fade-in-message').each(function () {

      if (scrollHeight > messageTop - windowHeight + 300) {

        $(this).addClass('is-fade-in');
      }
    });
  });


  // ==============================
  // ハンバーガーボタンとメニュー
  // ==============================

  // ハンバーガーボタンをクリックしたときにメニューが出たりしまわれたりする動き
  $('.js-burger').on('click', function(){

    $(this).toggleClass('js-is-cross');

    $('body').toggleClass('js-stop-scroll');

    $('.js-nav-wrapper').toggleClass('js-is-open')

  });


  // メニューの項目が選ばれたとき、メニューがしまわれる動き
  $('.js-nav-inner-item').on('click', function(){

    $('.js-burger').removeClass('js-is-cross');

    $('body').removeClass('js-stop-scroll');

    $('.js-nav-wrapper').removeClass('js-is-open')

  });
});