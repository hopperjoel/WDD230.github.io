function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
  }

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();