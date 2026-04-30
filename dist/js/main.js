!(function (b) {
  "use strict";
  (b(window).scroll(function () {
    (300 < b(this).scrollTop()
      ? b(".sticky-top").addClass("shadow")
      : b(".sticky-top").removeClass("shadow")
    ).addClass("top_01");
  }),
    b(window).scroll(function () {
      100 < b(this).scrollTop()
        ? b(".back-to-top").fadeIn()
        : b(".back-to-top").fadeOut();
    }),
    b(".back-to-top").click(function (a) {
      (a.preventDefault(),
        b("html, body").animate(
          {
            scrollTop: 0,
          },
          "300",
        ));
    }),
    b(".placement_01").owlCarousel({
      autoplay: !0,
      autoplayTimeout: 2e3,
      smartSpeed: 500,
      margin: 10,
      loop: !0,
      center: !1,
      dots: !1,
      nav: !1,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    }),
    b(".veteransslider").owlCarousel({
      autoplay: !0,
      autoplayTimeout: 3e3,
      smartSpeed: 500,
      margin: 25,
      loop: !0,
      center: !1,
      dots: !1,
      nav: !0,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    }),
    b(".accreditation_carousel").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3e3,
      smartSpeed: 500,
      margin: 25,
      loop: !0,
      center: !1,
      dots: !1,
      nav: true,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2,
        },
        768: {
          items: 2,
        },
        992: {
          items: 2,
        },
      },
    }),
    b(".hero.owl-carousel").length &&
      b(".hero.owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 500,
        margin: 25,
        loop: !0,
        center: !1,
        dots: !1,
        nav: true,
        navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
        },
      }),
    /* Redundant initializations removed as they are handled by React components
    b(".stats_carousel").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3e3,
      smartSpeed: 500,
      margin: 25,
      loop: !0,
      center: !1,
      dots: !1,
      nav: false,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    }),
    b(".stats_carousel_02").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3e3,
      smartSpeed: 500,
      margin: 25,
      loop: !0,
      center: !1,
      dots: !1,
      nav: false,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    }),
    */
    b(".location_carousel").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3e3,
      smartSpeed: 500,
      margin: 10,
      loop: !0,
      center: !1,
      dots: !1,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
      },
    }),
    $("a.nav-link").on("click", function (a) {
      (a.preventDefault(),
        (a = $(this).attr("href")),
        $("a.nav-link").removeClass("active"),
        $(this).addClass("active"),
        $("html, body").animate(
          {
            scrollTop: $(a).offset().top - 80,
          },
          5,
        ));
    }),
    $(".nav-link a").on("click", function (a) {
      (a.preventDefault(),
        (a = $(this).attr("href")),
        $(".nav-link a").removeClass("active"),
        $(this).addClass("active"),
        $("html, body").animate(
          {
            scrollTop: $(a).offset().top - 80,
          },
          5,
        ));
    }));

  b(".program_carousel").owlCarousel({
    autoplay: true,
    // autoplayTimeout: 3e3,
    // smartSpeed: 500,
    margin: 25,
    loop: true,
    center: false,
    dots: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 1.2,
      },
    },
  });
  var c = window.location.href;
  (b('.navbar-nav a[href="' + c + '"]').addClass("active"),
    b("[data-bgimg]").each(function () {
      b(this).css("background-image", "url(" + b(this).data("bgimg") + ")");
    }));
  const d = document.querySelectorAll(".redirectBtn");
  d.forEach((a) => {
    a.addEventListener("click", function () {
      const a = document.getElementById("subChildUG");
      a &&
        a.scrollIntoView({
          behavior: "smooth",
        });
    });
  });
  const e = document.querySelectorAll(".redirectBtn2");
  e.forEach((a) => {
    a.addEventListener("click", function () {
      const a = document.getElementById("subChildPG");
      a &&
        a.scrollIntoView({
          behavior: "smooth",
        });
    });
  });
  const a = document.querySelectorAll(".accordion-button");
  a.forEach((a) => {
    a.addEventListener("click", function () {
      const a = document.querySelector(".accordion-button:not(.collapsed)"),
        b = document.querySelector(this.getAttribute("data-target"));
      var c;
      (a &&
        a !== this &&
        ((c = a.getAttribute("data-target")),
        document.querySelector(c).classList.remove("show"),
        a.classList.add("collapsed")),
        b.classList.toggle("show"),
        this.classList.toggle("collapsed"));
    });
  });

  //////////////
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-item.nav-link");
    const sections = document.querySelectorAll("section"); // Ensure all target sections have a `<section>` tag

    function onScroll() {
      let scrollPos = window.scrollY + 300; // Offset to trigger a bit earlier

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${section.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }
    window.addEventListener("scroll", onScroll);
  });

  ////////////////////////////////////////////////////

  function resumeSlider() {
    // Check if ANY video is still playing
    const isAnyPlaying = [...videos].some((v) => !v.paused && !v.ended);

    if (!isAnyPlaying) {
      $carousel.trigger("play.owl.autoplay", [2000]);
    }
  }

  /* Handled in React component
  $(".events-carousel").owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    margin: 20,
    items: 3,
    dots: false,
    nav: true,
    navText: [
      '<img src="img/testimonal/left-arrow.svg" class="owl-arrow">',
      '<img src="img/testimonal/right-arrow.svg" class="owl-arrow">',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
    },
  });
  */
  $(".infra-carousel").owlCarousel({
    autoplay: true,
    center: false,
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    navText: [
      '<img src="img/testimonal/left-arrow.svg" class="owl-arrow">',
      '<img src="img/testimonal/right-arrow.svg" class="owl-arrow">',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      991: { items: 3 },
    },
  });
  $(".infra-carousel-01").owlCarousel({
    autoplay: true,
    center: false,
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: false,
  });

  $(document)
    .on("mouseenter", ".owl-carousel", function () {
      $(this).trigger("stop.owl.autoplay");
    })
    .on("mouseleave", ".owl-carousel", function () {
      const owl = $(this).data("owl.carousel");
      const timeout = owl?.options?.autoplayTimeout || 2000;

      if (owl?.options?.autoplay) {
        $(this).trigger("play.owl.autoplay", [timeout]);
      }
    });
})(jQuery);
function enableMobileTabScroll() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    document
      .querySelectorAll(".mobile-scroll-tabs .nav-link")
      .forEach((tab) => {
        tab.addEventListener("click", function () {
          this.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        });
      });
  }
}

// Run on load
enableMobileTabScroll();

// Optional: re-check on resize (e.g., device rotation)
window.addEventListener("resize", enableMobileTabScroll);
document.addEventListener("scroll", function () {
  const btn = document.getElementById("applyNowBtn");

  if (window.scrollY > 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});  