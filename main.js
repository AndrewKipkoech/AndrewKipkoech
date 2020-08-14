

$(document).ready(function(){
  $('.menu-toggler').on('click', function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  })

  $('.top-nav  .nav-link').on('click', function(){
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  })

  $('nav a[href*="#"]').on('click', function(){
    $('html,body').animate({
      scrollTop:$($(this).attr('href')).offset().top-100
    }, 2000);
  });

  $('#up').on('click', function(){
    $('html,body').animate({
      scrollTop:0
    }, 3000);
  });

});



$('.skill-percentage').each(function(){
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width", per+'%');
  $({animatedValue: 0}).animate({animatedValue: per},{
    duration: 1000,
    step:function(){
      $this.attr('per', Math.floor(this.animatedValue))
    },
    complete:function(){
      $this.attr('per', Math.floor(this.animatedValue) + '%')
    }
  })
});

