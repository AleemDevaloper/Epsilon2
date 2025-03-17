

$(document).ready(function() {

    document.getElementById('navicon').onclick = function() {
        this.classList.toggle('open');
    }
  
    

   
    $('.slick-carousel').slick({
      infinite: true,
      slidesToShow: 3, // Shows a three slides at a time
      slidesToScroll: 2, // When you click an arrow, it scrolls 1 slide at a time
      arrows: false, // Adds arrows to sides of slider
      dots: true, // Adds the dots on the bottom
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       ]
    });

    
  });