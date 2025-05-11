const toggleNav = () => {
  setTimeout(() => {
      document.body.classList.add('open');
      document.querySelector('.flag-string').classList.add('risen');
      document.querySelector('#nav-toggle').classList.add('open');
      
      setTimeout(() => {
          document.querySelector('.container').style.display = 'none';
          document.querySelector('.cube-container').classList.add('visible');
          document.querySelector('.controls').classList.add('visible');
      }, 1000);
  }, 500);
};