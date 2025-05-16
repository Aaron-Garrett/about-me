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
  document.querySelector('.bachelors').style.display = 'flex';
}

const hideBachelors = (event) => {
  event.stopPropagation();
  console.log('hideBachelors called'); // Add this line for debugging
  const bachelorsDiv = document.querySelector('.bachelors');
  console.log('bachelorsDiv:', bachelorsDiv); // Add this line for debugging
  if (bachelorsDiv) bachelorsDiv.style.display = 'none';
}

const growMasters = () => {
  document.querySelector('.masters').style.display = 'flex';
}

const hideMasters = (event) => {
  event.stopPropagation();
  console.log('hideMasters called'); // Add this line for debugging
  const mastersDiv = document.querySelector('.masters');
  console.log('mastersDiv:', mastersDiv); // Add this line for debugging
  if (mastersDiv) mastersDiv.style.display = 'none';
}

const growBook = (book) => {
  const bookDiv = document.querySelector(`.${book}`);
  if (bookDiv) {
    bookDiv.style.display = 'flex';
    bookDiv.classList.add('visible');
  }
}

const hideBook = (book) => {
  const bookDiv = document.querySelector(`.${book}`);
  if (bookDiv) {
    bookDiv.style.display = 'none';
    bookDiv.classList.remove('visible');
  }
}