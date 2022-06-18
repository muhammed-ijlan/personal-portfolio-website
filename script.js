$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// modal
const modalBtn = document.querySelector(".modal-btn")
const modalBg = document.querySelector(".modal-bg")
const modalClose = document.querySelector(".modal-close")

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active")
})

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active")
})

//form submission handler

$(".submit-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycby55gS7ogG5Mv_DguTto5PbKOsQTkib-YjK1mgy8g/exec",
    data: $(".submit-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Thank You for contacting me")
      window.open('./images/ijlans-resume.pdf', '_blank');
      window.location.reload()
      
    },
    error: function (err) {
      alert("Error")

    }
  })
})

$(".contact-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycby55gS7ogG5Mv_DguTto5PbKOsQTkib-YjK1mgy8g/exec",
    data: $(".contact-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Thank You for contacting me")
      window.location.reload()
    },
    error: function (err) {
      alert("Error")

    }
  })
})
