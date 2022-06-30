document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("90").style.opacity = 1;
    document.getElementById("91").style.opacity = 0;
    document.getElementById("92").style.opacity = 0;
    document.getElementById("93").style.opacity = 0;
    document.getElementById("94").style.opacity = 0;
    document.getElementById("95").style.opacity = 0;
});


function zien(hallo) {
    document.getElementById("90").style.opacity = 0;
    document.getElementById("91").style.opacity = 0;
    document.getElementById("92").style.opacity = 0;
    document.getElementById("93").style.opacity = 0;
    document.getElementById("94").style.opacity = 0;
    document.getElementById("95").style.opacity = 0;
    document.getElementById(hallo).style.opacity = 1;
}
