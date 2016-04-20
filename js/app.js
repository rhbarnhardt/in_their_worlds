$(document).foundation();
$(document).ready(function(){

    
  $('.carousel').slick({
    dots:true,
    slidesToShow:1,
    slidesToScorll:1,
    autoplay:true,
    autoplaySpeed: 4000, 
    infinite:true,
    adaptiveHeight:true,
   
  });

$('.carouselTwo').slick({
    dots:true,
    slidesToShow:2,
    slidesToScorll:1,
    centerMode: true,
    centerPadding: '60px',
    infinite:true,
//    adaptiveHeight:true,
    lazyLoad:'ondemand',
  });

    var video = $('#slider .slick-current').find('video').get(0).play();
 
   $('#slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('#slider .slick-current').find('video').get(0).pause();
    var video = $('#slider .slick-active').find('video').get(0).play();
});
    
    
});
