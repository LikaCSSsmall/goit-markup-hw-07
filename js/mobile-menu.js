(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.openMenuBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();
