let rotationX = 0;
let rotationY = 0;

function rotateLeft() {
    if (rotationY % 360 === 0 && rotationX % 360  === 0) {
        rotationY += 90;
    }
    
    if (rotationY % 360 === -90) {
        rotationY += 180;
    }
    if (rotationY % 360 === -180) {
        rotationY -= 90;
    }
    if (rotationY % 360 === 180) {
        rotationY += 90;
    }
    if (rotationY % 360 === 270) {
        rotationY += 180;
    }
    if (rotationX % 360 === 90) {
        rotationY += 90;
        rotationX -= 90;
    }
    if (rotationX % 360 === -90) {
        rotationY += 90;
        rotationX += 90;
    }
    if (rotationX < 0) {
        rotationX += 360;
    }
    updateCubeRotation();

}

function rotateRight() {
    if (rotationY % 360  === 0 && rotationX % 360  === 0) {
        rotationY -= 90; // Reset to 360 degrees to avoid negative values
    }
    if (rotationY % 360 === 90) {
        rotationY -= 180;
    }
    if (rotationX % 360 === 90) {
        rotationY -= 90;
        rotationX -= 90;
    }
    if (rotationY % 360 === -180) {
        rotationY += 90;
    }
    if (rotationY % 360 === -270) {
        rotationY -= 180;
    }
    if (rotationY % 360 === 180) {
        rotationY += 90;
    }
    if (rotationX % 360 === -90) {
        rotationY -= 90;
        rotationX += 90;
    }
    if (rotationX < 0) {
        rotationX += 360;
    }
    updateCubeRotation();

}

function rotateUp() {
    if (rotationY % 360  === 0 && rotationX % 360  === 0) {
        rotationX -= 90; // Reset to 360 degrees to avoid negative values
    }
    if (rotationY % 360 === -90) {
        rotationY += 90;
        rotationX -= 90;
    }
    if (rotationY % 360 === 90) {
        rotationY -= 90;
        rotationX -= 90;
    }
    if (rotationY % 360 === -180) {
        rotationY += 180;
        rotationX -= 90;
    }
    if (rotationY % 360 === 180) {
        rotationY -= 180;
        rotationX -= 90;
    }
    if (rotationY % 360 === 270) {
        rotationY -= 270;
        rotationX -= 90;
    }
    if (rotationY % 360 === -270) {
        rotationY += 270;
        rotationX -= 90;
    }
    if (rotationX % 360 === 90) {
        rotationX -= 180;
    }
    updateCubeRotation();
}

function rotateDown() {
    if (rotationY % 360  === 0 && rotationX % 360  === 0) {
        rotationX += 90; // Reset to 360 degrees to avoid negative values
    }
    if (rotationY % 360 === -90) {
        rotationY += 90;
        rotationX += 90;
    }
    if (rotationY % 360 === 90) {
        rotationY -= 90;
        rotationX += 90;
    }
    if (rotationY % 360 === -180) {
        rotationY += 180;
        rotationX += 90;
    }
    if (rotationY % 360 === 180) {
        rotationY -= 180;
        rotationX += 90;
    }
    if (rotationY % 360 === 270) {
        rotationY -= 270;
        rotationX -= 90;
    }
    if (rotationY % 360 === -270) {
        rotationY += 270;
        rotationX -= 90;
    }
    if (rotationX % 360 === -90) {
        rotationX += 180;
    }
    updateCubeRotation();
}

function rotateBack() {
    if (rotationY % 360  === 0 && rotationX % 360  === 0) {
        rotationY += 180; // Reset to 360 degrees to avoid negative values
    }
    if (rotationY % 360 === -90) {
        rotationY -= 90;
    }
    if (rotationY % 360 === 90) {
        rotationY += 90;
    }
    if (rotationY % 360 === 270) {
        rotationY -= 90;
    }
    if (rotationY % 360 === -270) {
        rotationY += 90;
    }
    if (rotationX % 360 === -90) {
        rotationX += 90;
        rotationY -= 180;
    }
    if (rotationX % 360 === 90) {
        rotationX -= 90;
        rotationY += 180;
    }
    updateCubeRotation();
}

function resetCube() {
    rotationX = Math.round(rotationX / 360) * 360;
    rotationY = Math.round(rotationY / 360) * 360;
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
