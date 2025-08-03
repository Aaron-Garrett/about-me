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

    // Disable pointer-events for all faces
    const faces = document.querySelectorAll('.cube .face');
    faces.forEach(face => face.style.pointerEvents = 'none');

    // Determine which face is in front based on rotation
    const normalizedX = ((rotationX % 360) + 360) % 360;
    const normalizedY = ((rotationY % 360) + 360) % 360;

    let visibleFace;
    if (normalizedX === 0 && normalizedY === 0) visibleFace = 'front';
    else if (normalizedX === 0 && normalizedY === 90) visibleFace = 'left-cube';
    else if (normalizedX === 0 && normalizedY === 270) visibleFace = 'right-cube';
    else if (normalizedX === 0 && normalizedY === 180) visibleFace = 'back-cube';
    else if (normalizedX === 90) visibleFace = 'bottom';
    else if (normalizedX === 270) visibleFace = 'top';

    if (visibleFace) {
        const faceEl = document.querySelector(`.${visibleFace}`);
        if (faceEl) faceEl.style.pointerEvents = 'auto';
    }
}

// Optional: Initialize the cube with a default rotation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCubeRotation();  // Apply the initial rotation
});
