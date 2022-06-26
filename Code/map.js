document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("0").style.opacity = 1;
    document.getElementById("1").style.opacity = 0;
    document.getElementById("2").style.opacity = 0;
    document.getElementById("3").style.opacity = 0;
    document.getElementById("4").style.opacity = 0;
    document.getElementById("5").style.opacity = 0;
    document.getElementById("6").style.opacity = 0;

    document.getElementById("10").style.opacity = 1;
    document.getElementById("11").style.opacity = 0;
    document.getElementById("12").style.opacity = 0;
    document.getElementById("13").style.opacity = 0;
    document.getElementById("14").style.opacity = 0;
    document.getElementById("15").style.opacity = 0;
});

function showPicture(index) {
    document.getElementById("0").style.opacity = 0;
    document.getElementById("1").style.opacity = 0;
    document.getElementById("2").style.opacity = 0;
    document.getElementById("3").style.opacity = 0;
    document.getElementById("4").style.opacity = 0;
    document.getElementById("5").style.opacity = 0;
    document.getElementById("6").style.opacity = 0;
    document.getElementById(index).style.opacity = 1;
}

function show(index) {
    document.getElementById("10").style.opacity = 0;
    document.getElementById("11").style.opacity = 0;
    document.getElementById("12").style.opacity = 0;
    document.getElementById("13").style.opacity = 0;
    document.getElementById("14").style.opacity = 0;
    document.getElementById("15").style.opacity = 0;
    document.getElementById(index).style.opacity = 1;
}