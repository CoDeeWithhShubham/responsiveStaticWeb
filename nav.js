let heh = document.querySelector(".sticky");

onscroll = () => {
 let top=scrollY
 if(top>=50){
   heh.classList.add('active');
console.log('hi');
 }
 else{
   heh.classList.remove("active")
   console.log("bye");
 }

}



// function hel() {
//   let header = document.querySelector(".sticky");
//   let top = scrollY;
//   console.log('gg')
//   if (top >= 50) {
//     console.log('hi');
//     header.classList.add('active');

//   }
//   else {
//     header.classList.remove('active');
//     console.log("bye");
//   }


//  }






// this is for clock

setInterval(() => {
  let date = new Date;
  htime = date.getHours();
  mtime = date.getMinutes();
  stime = date.getSeconds();

  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  sec.style.transform = `rotate(${srotation}deg)`;


}, 1000);



// for burger

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
right = document.querySelector('.right');
nav = document.querySelector('.nav');
img = document.querySelector('.logo-img');


burger.addEventListener('click', () => {
  navbar.classList.toggle('nav-visibility');
  right.classList.toggle('nav-visibility');
  nav.classList.toggle('h-nav');
  img.classList.toggle("nav-visibility");

})



//   function myFunction() {
//     navbar.classList.toggle('nav-visibility');
//     right.classList.toggle('nav-visibility');
//    nav.classList.toggle('h-nav');
//    img.classList.toggle("nav-visibility");

//  }