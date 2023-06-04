

let tl=gsap.timeline();
let time=00;
tl
.from(".logo",{
  opacity:0,
  y:-100,
  duration:0.4,
})

.from(".navbar",{
  opacity:0,
  duration:0.1,
  stagger:{
        each:1,
      },
  y:-130,
})

.from("#login-btn",{
  opacity:0,
  y:-100,
  duration:0.5,
})

.from("#h1 h1",{
  opacity:0,
  duration:0.5,
  onStart: function(){
      $('#h1 h1').textillate({ in: { effect: 'fadeInUp' } });
  },
  // x:70,
})

.from(".text",{
  opacity:0,
  x:-100,
  duration:0.5,
})

.from("#btn",{
  opacity:0,
  rotation:360,
  y:60,
  duration:0.5,
})

gsap.from("#icons0, #icons1",{
  scrollTrigger:{
      trigger:"#icons0, #icons1",
      scroller:"body",
      markers:false,
      start:"bottom 100%",
      end:"bottom 60%",
      scrub:2,    
  },
  x:-100,
  opacity:0,
  color:"blue",
})
gsap.from("#icons2, #icons3",{
  scrollTrigger:{
      trigger:"#icons2, #icons3",
      scroller:"body",
      markers:false,
      start:"bottom 100%",
      end:"bottom 60%",
      scrub:2,    
  },
  x:100,
  opacity:0,
  color:"blue",
})
gsap.from(".box-container>.box",{
  scrollTrigger:{
      trigger:".box-container>.box ",
      scroller:"body",
      markers:false,
      start:"bottom 100%",
      end:"bottom 90%",
      scrub:2,    
  },
  scale:0.7,
  opacity:0,
})
gsap.from(".newsletter",{
  scrollTrigger:{
      trigger:".newsletter ",
      scroller:"body",
      markers:false,
      start:"bottom 100%",
      end:"bottom 90%",
      scrub:2,    
  },
  scale:0.7,
  opacity:0,
})


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};


var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});