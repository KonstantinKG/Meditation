   $(document).ready(function(){
   $('.header__burger').on('click', function(){
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.breath__icon').on('click', function(){
      if ($(this).hasClass('active')) {
         $(this).toggleClass('_icon-play');
         $(this).toggleClass('active');
      } else {
         $('.breath__icon').addClass('_icon-play')
         $('.breath__icon').removeClass('active')
         $(this).toggleClass('_icon-play');
         $(this).toggleClass('active');
      }
   });
});
