// SROLL NAV
var header = document.querySelector("header");
var topbar = document.querySelector(".topbar");
var logo = document.querySelector(".header .logo");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("sticky-header");
    topbar.classList.add("display-none");
    logo.classList.add("display-none");
  } else {
    header.classList.remove("sticky-header");
    topbar.classList.remove("display-none");
    logo.classList.remove("display-none");
  }
});

// PREVENT CART-DROPDOWN ON CLOSING
let cartDropdownMenu = document.querySelector(".cart-dropdown-menu");
cartDropdownMenu.addEventListener("click", function (e) {
  e.stopPropagation();
});

// SWIPER-BANNER
var swiperBanner = new Swiper(".swiper-banner", {
  rewind: true,
  speed: 1000,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
});

// SWIPER-TRENDING
var swiperTrending = new Swiper(".swiper-trending", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return `<span>${current}</span><span>${total}</span>`;
    },
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

// SWIPER-DISCOUNT
var swiperDiscount = new Swiper(".swiper-discount", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return `<span>${current}</span><span>${total}</span>`;
    },
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

// SWIPER-NEWIN
var swiperNewin = new Swiper(".swiper-newin", {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return `<span>${current}</span><span>${total}</span>`;
    },
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

// SWIPER-ABOUT
var swiperAbout = new Swiper(".swiper-about", {
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// SWIPER-DISCOUNT-2
var swiperDiscount_2 = new Swiper(".swiper-discount-2", {
  slidesPerView: 1,
  spaceBetween: 5,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// SWIPER-CATEGORIES
var swiperCategories = new Swiper(".swiper-categories", {
  slidesPerView: 1,
  spaceBetween: 5,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// SEARCH-MODAL
const searchModal = document.getElementById("searchModal");

searchModal.addEventListener("show.bs.modal", (event) => {
  const siteContent = document.querySelector(".site-content");
  siteContent.classList.add("blur");
});

searchModal.addEventListener("hide.bs.modal", (event) => {
  const siteContent = document.querySelector(".site-content");
  siteContent.classList.remove("blur");
});

// COUNTER
var btnMinus = document.getElementsByClassName("btn-minus");
var btnPlus = document.getElementsByClassName("btn-plus");

for (var i = 0; i < btnPlus.length; i++) {
  var button = btnPlus[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    var inputValue = input.value;
    var newValue = parseInt(inputValue) + 1;
    input.value = newValue;
  });
}

for (var i = 0; i < btnMinus.length; i++) {
  var button = btnMinus[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    var input = buttonClicked.parentElement.children[1];
    var inputValue = input.value;
    var newValue = parseInt(inputValue) - 1;
    input.value = newValue;
    if (newValue >= 0) {
      input.value = newValue;
    } else {
      input.value = 0;
    }
  });
}

// RANGE SLIDER

var snapSlider = document.getElementById("slider-snap");

if (typeof snapSlider != "undefined" && snapSlider != null) {
  noUiSlider.create(snapSlider, {
    start: [100, 2000],
    connect: true,
    range: {
      min: 100,
      max: 2000,
    },
  });

  var snapValues = [
    document.getElementById("slider-snap-value-lower"),
    document.getElementById("slider-snap-value-upper"),
  ];

  snapSlider.noUiSlider.on("update", function (values, handle) {
    snapValues[handle].innerHTML = values[handle];
  });
}

// FILTER-DROPDOWN
var filterDropdown = document.querySelector("#filter-dropdown");

if (typeof filterDropdown != "undefined" && filterDropdown != null) {
  var dropdownToggle = filterDropdown.querySelector(".dropdown-toggle");

  var dropdownMenu = filterDropdown.querySelector(".dropdown-menu");

  var orderRadios = filterDropdown.querySelectorAll('input[name="options"]');

  for (const orderRadio of orderRadios) {
    orderRadio.addEventListener("change", getRadioValue);
  }

  function getRadioValue(e) {
    var target = e.target;

    if (target.checked) {
      dropdownToggle.textContent = target.value;

      dropdownToggle.setAttribute("aria-expanded", false);

      dropdownMenu.style = "";

      dropdownMenu.classList.remove("show");

      dropdownMenu.removeAttribute("data-popper-placement");
    }
  }
}

// SWIPER-LOOKBOOK
var swiperAbout = new Swiper(".swiper-lookbook", {
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// SWIPER-COMMERCIAL
var swiperCommercial = new Swiper(".swiper-commercial", {
  rewind: true,
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

function initMap() {
  // The location of Biaswimwear
  var biaSwimwear = { lat: 41.0316, lng: 28.9776 };
  var data = `<h3 class="fw-bold h4">BIA Swimwear İstanbul</h3>`;
  var infowindow = new google.maps.InfoWindow({
    content: data,
  });
  // The map, centered at Biaswimwear
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: biaSwimwear,
    mapId: "56ae0d131083f5a5",
  });
  // The marker, positioned at Biaswimwear
  var marker = new google.maps.Marker({
    position: biaSwimwear,
    title: data,
    map: map,
  });

  google.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });
}

// SWIPER-PRODUCT-THUMBS
var galleryThumbs = new Swiper(".swiper-product-thumbs", {
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 4,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: "vertical",
});

// SWIPER-PRODUCT-GALERY
var galleryMain = new Swiper(".swiper-product-gallery", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
  breakpoints: {
    768: {
      rewind: false,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      preventInteractionOnTransition: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    },
  },
});

galleryMain.on("slideChangeTransitionStart", function () {
  galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on("transitionStart", function () {
  galleryMain.slideTo(galleryThumbs.activeIndex);
});

// SWIPER-SIMILAR
var swiperSimilar = new Swiper(".swiper-similar", {
  slidesPerView: 1,
  spaceBetween: 5,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
