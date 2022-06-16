

document.addEventListener("DOMContentLoaded", () => {

    const section = document.getElementById("section");

    section.addEventListener("mousemove" , (event) => {
        updatePositionOnScreen(event)
    })

    function getDistanceFromCenter(event) {
        const rect = section.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const centerX = section.clientWidth / 2;
        const centerY = section.clientHeight / 2;

        const deltaX = Math.abs(centerX - mouseX);
        const deltaY = Math.abs(centerY - mouseY);

        const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

        return distance;
    }

    function updatePositionOnScreen(event) {

        const rect = section.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;


        const elementPosX = document.getElementById("posX");
        const elementPosY = document.getElementById("posY");
        const elementDistance = document.getElementById("distance");

        elementPosX.textContent = mouseX;
        elementPosY.textContent = mouseY;
        elementDistance.textContent = getDistanceFromCenter(event);
    }


}, false);