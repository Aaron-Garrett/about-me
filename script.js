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
  const gridDivs = document.querySelectorAll('.books');
  if (bookDiv) {
    bookDiv.classList.add('visible');
    gridDivs.forEach(div => {
      div.style.filter = 'blur(5px)';
      div.style.pointerEvents = 'none';
    });
  }
}

const hideBook = (book) => {
  const bookDiv = document.querySelector(`.${book}-explanation`);
  const gridDivs = document.querySelectorAll('.books');

  if (bookDiv) {
    bookDiv.classList.remove('visible');
    gridDivs.forEach(div => {
      div.style.filter = 'none';
      div.style.pointerEvents = 'all';
    });
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

adjustPhotos() = () => {
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