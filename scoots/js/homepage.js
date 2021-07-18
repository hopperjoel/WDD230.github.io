var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("hero-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
};

// function floatingNav() {
//   const navbar = document.querySelector("nav");
//   const navbarHeight = 100;
//   const distanceFromTop = Math.abs(
//     document.body.getBoundingClientRect().top
//   );

//   if (distanceFromTop >= navbarHeight) {
//       navbar.classList.add("fixed-top"); }
//   else {navbar.classList.remove("fixed-top");}
//   };

// document.addEventListener("scroll", floatingNav());
    
// var button = document.querySelector("button");
// noOpacity = false;

// button.addEventListener("click", function opacityChange() {
//   if(noOpacity){
//     document.getElementsByTagName("nav").style.backgroundColor = "white";
//     noOpacity = false;
//   } else {
//     document.getElementsByTagName("nav").style.backgroundColor = "rgba(46, 196, 182, 1.0)";
//     noOpacity = true;
//   }
// }); {navbar.classList.add("fixed-top"); 