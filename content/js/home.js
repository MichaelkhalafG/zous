$(document).ready(function () {
  // aos activ 
  AOS.init();

  // count down start
  let countDownDate = new Date("jun 1, 2023 12:00:00").getTime();
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let daysText = "days";
    let hoursText = "hours";
    let minutesText = "minutes";
    document.getElementById("countdown").innerHTML = `<div class="col-2">
                                <span class="m-0 p-0" id="days">${days}</span>
                                <div class="m-0 p-0 p1_lipstick">${daysText}</div>
                            </div>` + `<span class="col-1 lipstick_dotes">:</span>` + `<div class="col-2">
                                <span class="m-0 p-0" id="days">${hours}</span>
                                <div class="m-0 p-0 p1_lipstick">${hoursText}</div>
                            </div>` + `<span class="col-1 lipstick_dotes">:</span>` + `<div class="col-2">
                                <span class="m-0 p-0" id="days">${minutes}</span>
                                <div class="m-0 p-0 p1_lipstick">${minutesText}</div>
                            </div>`;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "end !!";
    }
  }, 1000);

  // scroll to bottom
  $(window).scroll(function () {

    var height = ($('.for_nav').height());
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= height - 500) {
      $('.nav_con').addClass('solid-nav');
    } if (scrollTop <= height + 50) {
      $('.nav_con').removeClass('solid-nav');
    }
  });
});
/*=======================================================
  * Author: Michael khalaf
========================================================*/