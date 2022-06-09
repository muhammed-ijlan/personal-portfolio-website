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
    strings: ["Developer", "Designer"],
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

//model form data to email functionality

const sendEmail = () => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ijlanijlu580@gmail.com",
    Password: "8E7F5D3C3B65CFDDF617AA781A56AF6AFEB8",
    To: 'ijlanijlu580@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New contact Form Enquiry",
    Body: "Name " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Message: " + document.getElementById("message").value

  }).then(
    message => alert(message)
  );
}