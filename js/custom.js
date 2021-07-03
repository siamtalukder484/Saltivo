$(function(){
//Work part Venobox video

$('.venobox').venobox(); 
 

//Brand Part Slider Part
$('.brand-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows:false, 
  autoplay:true,
  autoplaySpeed:2500,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
    {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode:false,
        }
    },
     {
         breakpoint: 992,
         settings: {
           slidesToShow: 4,
           centerMode:false,
         }
       },

  ]
});




//Case Study Slider Part
$('.case-study-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    prevArrow:'.case-study-prev',
    nextArrow:'.case-study-next',
    autoplay:false,
    autoplaySpeed:2500,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            centerMode:false,
          }
      },
  
    ]
  });


//banner slider
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:6000,
  fade: true,
  fadeIn: 500,
  fadeOut: 500,
  autoplaySpeed: 3000,
});



//Blog Part Slider Part
$('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows:false, 
  autoplay:true,
  autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode:false,
          
        }
    },
     {
         breakpoint: 992,
         settings: {
           slidesToShow: 2,
           centerMode:false,
         }
       },

  ]
});





});