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

/* ---------- Settling: flatten the cube while it's at rest ----------
   Touch scrolling inside preserve-3d layers is unreliable on mobile, so once a rotation
   finishes we render only the current face as a plain 2D element (scaled to match how big
   it looked in 3D). Before the next rotation we put the 3D transforms back. */
const ROTATION_MS = 800;
let settleTimer = null;

function settleCube() {
    const container = document.querySelector('.cube-container');
    const face = currentFaceElement();
    if (!container || !face) return;
    const perspective = parseFloat(getComputedStyle(container).perspective) || 1000;
    const half = container.offsetWidth / 2;
    container.style.setProperty('--settle-scale', perspective / (perspective - half));
    face.classList.add('is-current');
    container.classList.add('settled');
}

function unsettleCube() {
    const container = document.querySelector('.cube-container');
    const cube = document.getElementById('cube');
    if (!container || !container.classList.contains('settled')) return;
    // Restore the 3D state without animating, so the next rotation starts from where we are.
    container.classList.add('snap');
    container.classList.remove('settled');
    document.querySelectorAll('.cube .face.is-current').forEach(f => f.classList.remove('is-current'));
    void cube.offsetWidth;
    container.classList.remove('snap');
    void cube.offsetWidth;
}

function currentFaceElement() {
    const face = getCurrentFace();
    return face ? document.querySelector(`.cube .${face}`) : null;
}

window.addEventListener('resize', () => {
    const container = document.querySelector('.cube-container');
    if (container && container.classList.contains('settled')) settleCube();
});

function updateCubeRotation() {
    const cube = document.getElementById('cube');
    unsettleCube();
    clearTimeout(settleTimer);
    settleTimer = setTimeout(settleCube, ROTATION_MS + 50);
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

/* ---------- Swipe to rotate (touch devices) ---------- */

const SWIPE_MIN_DISTANCE = 50;   // px the finger must travel
const SWIPE_AXIS_RATIO = 1.5;    // how much more it must travel on one axis than the other
const SWIPE_COOLDOWN_MS = 800;   // matches the cube's CSS transition

// Cube geometry: faces in a ring when going "finger right" (revealing the face on the left).
const LEFT_OF = { front: 'left-cube', 'left-cube': 'back-cube', 'back-cube': 'right-cube', 'right-cube': 'front' };
const RIGHT_OF = { front: 'right-cube', 'right-cube': 'back-cube', 'back-cube': 'left-cube', 'left-cube': 'front' };
const GO_TO_FACE = {
    front: resetCube,
    'left-cube': rotateLeft,
    'right-cube': rotateRight,
    'back-cube': rotateBack,
    top: rotateUp,
    bottom: rotateDown
};

function getCurrentFace() {
    const x = ((rotationX % 360) + 360) % 360;
    const y = ((rotationY % 360) + 360) % 360;
    if (x === 90) return 'bottom';
    if (x === 270) return 'top';
    if (x !== 0) return null;
    return { 0: 'front', 90: 'left-cube', 180: 'back-cube', 270: 'right-cube' }[y] || null;
}

// For each swipe direction, is there an inner scroller (e.g. the book carousel) that
// can still scroll that way? If so, the swipe belongs to it and must not rotate the cube.
function getScrollBlocks(target, boundary) {
    const blocks = { left: false, right: false, up: false, down: false };
    for (let el = target; el && el !== boundary; el = el.parentElement) {
        const cs = getComputedStyle(el);
        const scrollsX = /(auto|scroll)/.test(cs.overflowX) && el.scrollWidth > el.clientWidth + 1;
        const scrollsY = /(auto|scroll)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 1;
        if (scrollsX) {
            if (el.scrollLeft > 0) blocks.right = true;                                      // finger right -> content moves back
            if (el.scrollLeft < el.scrollWidth - el.clientWidth - 1) blocks.left = true;     // finger left -> content moves forward
        }
        if (scrollsY) {
            if (el.scrollTop > 0) blocks.down = true;
            if (el.scrollTop < el.scrollHeight - el.clientHeight - 1) blocks.up = true;
        }
    }
    return blocks;
}

function swipeCube(direction) {
    const current = getCurrentFace();
    if (!current) return;
    const inRing = current !== 'top' && current !== 'bottom';
    let next = null;

    if (direction === 'right') next = inRing ? LEFT_OF[current] : null;
    else if (direction === 'left') next = inRing ? RIGHT_OF[current] : null;
    else if (direction === 'down') next = inRing ? 'top' : (current === 'bottom' ? 'front' : null);
    else if (direction === 'up') next = inRing ? 'bottom' : (current === 'top' ? 'front' : null);

    if (next) GO_TO_FACE[next]();
}

function initSwipe() {
    const container = document.querySelector('.cube-container');
    if (!container) return;

    let start = null;
    let lastSwipe = 0;

    container.addEventListener('touchstart', (e) => {
        const overlayOpen = document.querySelector('#overlays .visible');
        if (e.touches.length !== 1 || overlayOpen || !container.classList.contains('visible')) {
            start = null;
            return;
        }
        const t = e.touches[0];
        start = { x: t.clientX, y: t.clientY, blocks: getScrollBlocks(e.target, container) };
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
        if (!start) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - start.x;
        const dy = t.clientY - start.y;
        const { blocks } = start;
        start = null;

        if (Date.now() - lastSwipe < SWIPE_COOLDOWN_MS) return;

        let direction = null;
        if (Math.abs(dx) >= SWIPE_MIN_DISTANCE && Math.abs(dx) > Math.abs(dy) * SWIPE_AXIS_RATIO) {
            direction = dx > 0 ? 'right' : 'left';
        } else if (Math.abs(dy) >= SWIPE_MIN_DISTANCE && Math.abs(dy) > Math.abs(dx) * SWIPE_AXIS_RATIO) {
            direction = dy > 0 ? 'down' : 'up';
        }
        if (!direction || blocks[direction]) return;

        lastSwipe = Date.now();
        swipeCube(direction);
    }, { passive: true });

    container.addEventListener('touchcancel', () => { start = null; }, { passive: true });
}

// Optional: Initialize the cube with a default rotation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCubeRotation();  // Apply the initial rotation
    initSwipe();
});
