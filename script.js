const toggleNav = () => {
  setTimeout(() => {
      document.body.classList.add('open');
      document.querySelector('.flag-string').classList.add('risen');
      document.querySelector('#nav-toggle').classList.add('open');
  }, 500);
};