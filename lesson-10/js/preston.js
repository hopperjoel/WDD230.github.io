function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
  }

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

function announceDisplay() {
    var currentDay = new Date()
    if (currentDay.getDay() == 5) {
        document.getElementById("friday-announcement").style.display = "block"
    } else {
        document.getElementById("friday-announcement").style.display = "none"
    }
}