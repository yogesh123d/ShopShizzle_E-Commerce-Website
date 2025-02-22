var countDownDate = new Date("mar 5, 2025 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
  // Animations
  ScrollReveal().reveal(".top_nav",{
    origin :"bottom",
    distance:"20px",
    opacity:0,

  })
  ScrollReveal().reveal(".nav",{
    origin :"bottom",
    distance:"20px",
    opacity:0,
    delay:100,
  })
  ScrollReveal().reveal(".header",{
    origin :"bottom",
    distance:"20px",
    opacity:0,
    delay:200,
  })
  ScrollReveal().reveal(".section",{
    origin :"bottom",
    distance:"20px",
    opacity:0,
    duration:1000,
    delay:100,
  })
  ScrollReveal().reveal(".footer",{
    origin :"bottom",
    distance:"20px",
    opacity:0,
    duration:1000,
    delay:100,
  })

  // Mobile_Nav
  const hamburger=document.querySelector(".hamburger");
  const Nav=document.querySelector(".mobile_nav");

  hamburger.addEventListener("click", () =>{
    Nav.classList.toggle("mobile_nav_hide");
  })


  // Add to cart
  const AddToCart = document.querySelectorAll(".add_to_cart");

  AddToCart.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-ID");
      const title = button.getAttribute("data-title");
      const image = button.getAttribute("data-image");
      const price = button.getAttribute("data-price");
  
      const cartItem = { id, title, image, price };
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("myKey", "myValue");
    });
  });

  //account items
  let acc_dropdown=document.getElementById("acc_dropdown");

  function toggleMenu(){
    acc_dropdown.classList.toggle("open_menu");
  }