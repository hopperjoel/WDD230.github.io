function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
  }

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

if (dt.getDay() == 5) {
    document.getElementById("friday-announcement").style.display = "block"
} else {
    document.getElementById("friday-announcement").style.display = "none"
}