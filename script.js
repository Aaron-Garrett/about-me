const toggleNav = () => {
  setTimeout(() => {
    document.body.classList.add('open');
    const flagString = document.querySelector('.flag-string');
    const navToggle = document.querySelector('#nav-toggle');

    if (flagString) flagString.classList.add('risen');
    if (navToggle) navToggle.classList.add('open');

    setTimeout(() => {
      const container = document.querySelector('.container');
      const cubeContainer = document.querySelector('.cube-container');
      const controls = document.querySelector('.controls');

      if (container) container.style.display = 'none';
      if (cubeContainer) cubeContainer.classList.add('visible');
      if (controls) controls.classList.add('visible');
    }, 1000);
  }, 500);
};

const growBachelors = () => {
  document.querySelector('.bachelors').classList.add('visible');
  const bottomDiv = document.querySelector('.education-bottom');
  const topDiv = document.querySelector('.education-top');
  bottomDiv.style.filter = 'blur(5px)';
  bottomDiv.style.pointerEvents = 'none';
  topDiv.style.filter = 'blur(5px)';
  topDiv.style.pointerEvents = 'none';
}

const hideBachelors = (event) => {
  event.stopPropagation();

  console.log('hideBachelors called'); // Add this line for debugging
  const bottomDiv = document.querySelector('.education-bottom');
  const topDiv = document.querySelector('.education-top');
  bottomDiv.style.filter = 'blur(0)';
  bottomDiv.style.pointerEvents = 'all';
  topDiv.style.filter = 'blur(0)';
  topDiv.style.pointerEvents = 'all';
  const bachelorsDiv = document.querySelector('.bachelors');
  console.log('bachelorsDiv:', bachelorsDiv); // Add this line for debugging
  if (bachelorsDiv) bachelorsDiv.classList.remove('visible');
}

const growMasters = () => {
  document.querySelector('.masters').classList.add('visible');
  const bottomDiv = document.querySelector('.education-bottom');
  const topDiv = document.querySelector('.education-top');
  bottomDiv.style.filter = 'blur(5px)';
  bottomDiv.style.pointerEvents = 'none';
  topDiv.style.filter = 'blur(5px)';
  topDiv.style.pointerEvents = 'none';
}

const hideMasters = (event) => {
  event.stopPropagation();
  console.log('hideMasters called'); // Add this line for debugging
  const mastersDiv = document.querySelector('.masters');
  const bottomDiv = document.querySelector('.education-bottom');
  const topDiv = document.querySelector('.education-top');
  bottomDiv.style.filter = 'blur(0)';
  bottomDiv.style.pointerEvents = 'all';
  topDiv.style.filter = 'blur(0)';
  topDiv.style.pointerEvents = 'all';
  console.log('mastersDiv:', mastersDiv); // Add this line for debugging
  if (mastersDiv) mastersDiv.classList.remove('visible');
}

const growBook = (book) => {
  const bookDiv = document.querySelector(`.${book}-explanation`);
  const gridDiv = document.querySelector('.book-grid');
  if (bookDiv) {
    bookDiv.classList.add('visible');
    
    // Enable scrolling on the book explanation content
    const contentP = bookDiv.querySelector('p');
    if (contentP) {
      contentP.style.overflow = 'auto';
      contentP.style.WebkitOverflowScrolling = 'touch';
    }
    
    if (gridDiv) {
      gridDiv.style.filter = 'blur(5px)';
      // Don't completely disable pointer events on mobile
      if (window.innerWidth > 768) {
        gridDiv.style.pointerEvents = 'none';
      }
    }
  }
}

const hideBook = (book) => {
  const bookDiv = document.querySelector(`.${book}-explanation`);
  const gridDiv = document.querySelector('.book-grid');

  if (bookDiv) {
    bookDiv.classList.remove('visible');
    if (gridDiv) {
      gridDiv.style.filter = 'none';
      gridDiv.style.pointerEvents = 'all';
    }
  }
}

const showAboutMe = (name) => {
  const aboutMeDiv = document.querySelector(`.${name}`);
  const gridDivs = document.querySelectorAll('.triangles');
  if (aboutMeDiv) {
    aboutMeDiv.classList.add('visible');
    gridDivs.forEach(div => {
      div.style.filter = 'blur(5px)';
      div.style.pointerEvents = 'none';
    });
  }
}

const hideAboutMe = (name) => {
  const aboutMeDiv = document.querySelector(`.${name}`);
  const gridDivs = document.querySelectorAll('.triangles');

  if (aboutMeDiv) {
    aboutMeDiv.classList.remove('visible');
    gridDivs.forEach(div => {
      div.style.filter = 'none';
      div.style.pointerEvents = 'all';
    });
  }
}

const showHobby = (name) => {
  console.log('showHobby called with name:', name); // Debugging line
  const aboutMeDiv = document.querySelector(`.${name}-explanation`);
  console.log('aboutMeDiv:', aboutMeDiv); // Debugging line
  const gridDivs = document.querySelectorAll('.hobby-photo');
  if (aboutMeDiv) {
    aboutMeDiv.classList.add('visible');
    gridDivs.forEach(div => {
      div.style.filter = 'blur(5px)';
      div.style.pointerEvents = 'none';
    });
  }
}

const hideHobby = (name) => {
  const aboutMeDiv = document.querySelector(`.${name}-explanation`);
  const gridDivs = document.querySelectorAll('.hobby-photo');

  if (aboutMeDiv) {
    aboutMeDiv.classList.remove('visible');
    gridDivs.forEach(div => {
      div.style.filter = 'none';
      div.style.pointerEvents = 'all';
    });
  }
}

adjustPhotos = () => {
  const photos = document.querySelectorAll('.photo-gallery .photo');
  const positions = [
    { translateX: '-30%', rotate: '180deg' },
    { translateX: '-15%', rotate: '135deg' },
    { translateX: '0%', rotate: '90deg' },
    { translateX: '15%', rotate: '45deg' },
    { translateX: '30%', rotate: '0deg' }
  ];

  photos.forEach((photo, index) => {
    if (index < positions.length) {
      photo.style.transform = `translateX(${positions[index].translateX}) rotate(${positions[index].rotate})`;
    }
  });
}

// Initialize mobile touch handling when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Fix for mobile scroll issues
  const setupMobileScrolling = () => {
    // Add passive touch listeners to improve scroll performance
    const explanations = document.querySelectorAll('.bible-explanation p, .ownership-explanation p, .habits-explanation p, .leadership-explanation p, .dare-explanation p, .growth-explanation p, .wrong-explanation p, .lotr-explanation p');
    
    explanations.forEach(explanation => {
      // Prevent parent element scroll when scrolling inside the content
      explanation.addEventListener('touchmove', (e) => {
        e.stopPropagation();
      }, { passive: true });
    });
    
    // Enable horizontal scrolling for the book grid
    const bookGrid = document.querySelector('.book-grid');
    if (bookGrid) {
      bookGrid.addEventListener('touchmove', (e) => {
        e.stopPropagation();
      }, { passive: true });
    }
  };
  
  setupMobileScrolling();
});