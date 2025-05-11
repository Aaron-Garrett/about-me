let rotationX = 0;
let rotationY = 0;

function rotateLeft() {
    if (rotationY === 0 && rotationX === 0) {
        rotationY += 90;
    }
    if (rotationY % 360 === -90) {
        rotationY += 180;
    }
    if (rotationX%360 === 90) {
        rotationY += 90;
        rotationX -= 90;
    }
    if (rotationX%360 === -90) {
        rotationY += 90;
        rotationX += 90;
    }
    if (rotationX < 0) {
        rotationX += 360;
    }
    const cube = document.getElementById('cube');
    cube.style.transform = `translateZ(0) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

function rotateRight() {
    if (rotationY === 0 && rotationX === 0) {
        rotationY -= 90; // Reset to 360 degrees to avoid negative values
    }
    if (rotationY % 360 === 90) {
        rotationY -= 180;
    }
    if (rotationX%360 === 90) {
        rotationY -= 90;
        rotationX -= 90;
    }
    if (rotationX%360 === -90) {
        rotationY -= 90;
        rotationX += 90;
    }
    if (rotationX < 0) {
        rotationX += 360;
    }
    const cube = document.getElementById('cube');
    cube.style.transform = `translateZ(0) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

function rotateUp() {
    if (rotationY === 0 && rotationX === 0) {
        rotationX -= 90; // Reset to 360 degrees to avoid negative values
    }
    if (rotationY % 360 === -90) {
        rotationY += 90;
        rotationX -= 90;
    }
    if (rotationY%360 === 90) {
        rotationY -= 90;
        rotationX -= 90;
    }
    if (rotationX%360 === 90) {
        rotationX -= 180;
    }
    updateCubeRotation();
}

function rotateDown() {
    if (rotationY === 0 && rotationX === 0) {
        rotationX += 90; // Reset to 360 degrees to avoid negative values
    }
    if (rotationY % 360 === -90) {
        rotationY += 90;
        rotationX += 90;
    }
    if (rotationY%360 === 90) {
        rotationY -= 90;
        rotationX += 90;
    }
    if (rotationX%360 === -90) {
        rotationX += 180;
    }
    updateCubeRotation();
}

function resetCube() {
    rotationX = 0;
    rotationY = 0;
    updateCubeRotation();
}

function updateCubeRotation() {
    const cube = document.getElementById('cube');
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

// Optional: Initialize the cube with a default rotation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCubeRotation();  // Apply the initial rotation
});
