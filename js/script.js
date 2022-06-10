$(function(){
// Catgory-timer
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
// ====================================================================================
                                  //Index _Start
// ====================================================================================

    // fruits-slider-main
    $('.fruits-slider-main').slick({
        slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            arrows:true,
            pauseOnHover:false,
            prevArrow:".fruit-left-arrow",
            nextArrow:".fruit-right-arrow",
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                }
              },
              
            ]
      });

      //   Mixit-Up
      var containerEl = document.querySelector('.mixit');

      var mixer = mixitup(containerEl);



      //   COuntdown
      const year = new Date().getFullYear();
      const fourthOfJuly = new Date(year, 6,4).getTime();
      const fourthOfJulyNextYear = new Date(year + 1, 6, 4).getTime();
      const month = new Date().getMonth();


      // countdown
      let timer = setInterval(function() {

      // get today's date
      const today = new Date().getTime();

      // get the difference
      let diff;
      if(month > 6) {
        diff = fourthOfJulyNextYear - today;
      } else {
        diff = fourthOfJuly - today;
      }




      // math
      let days = Math.floor(diff / (1000 * 86 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // display
      document.getElementById("timer").innerHTML =
        "<div class=\"days\"> \
      <div class=\"numbers\">" + days + "</div>days</div> \
      <div class=\"hours\"> \
        <div class=\"numbers numbers2\">" + hours + "</div>hour</div> \
      <div class=\"minutes\"> \
        <div class=\"numbers\">" + minutes + "</div>min</div> \
      <div class=\"seconds\"> \
        <div class=\"numbers numbers2\">" + seconds + "</div>sec</div> \
      </div>";

      }, 1000);


      //   Mixit-Up-2
      var container = document.querySelector('.mixitupall');

      var mixer = mixitup(container);

      


// ====================================================================================
                                  //Index _End
// ====================================================================================
})


// hamburger
$(".navbar-toggler").click(function(event) {
  event.stopPropagation();
  $("#hamburger-menu").toggleClass("open");
  $("#menu-container .menu-list").toggleClass("active");
  slideMenu();
})

// scrol-function
$(window).scroll(function(){
  var top = $(this).scrollTop()
  if(top > 500){
    $(".navbar").addClass("sticky-menu")
  }
  else{
    $(".navbar").removeClass("sticky-menu")
  }
  if(top > 30){
    $(".top-up-button").fadeIn(300)
  }
  else{
    $(".top-up-button").fadeOut(300)
  }
});

// top-up-button
$(".top-up-button").click(function(){
  $("html,body").animate({scrollTop:0},1000)
});

// ====================================================================================
                                  //Catagory_Start
// ====================================================================================


 // fruits-slider-main
 $('.catagory-testimonial-slider').slick({
  slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows:true,
      pauseOnHover:false,
      prevArrow:".cat-testi-left-arrow",
      nextArrow:".cat-testi-right-arrow",
});
// catagory-left
var containerEl = document.querySelector('.mixitupalll');

var mixer = mixitup(containerEl);

// catagory-right
var containerEl = document.querySelector('.mixitupallll');

var mixer = mixitup(containerEl);



