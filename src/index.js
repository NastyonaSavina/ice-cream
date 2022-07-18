// SCRIPT_CONTACTS_MODAL_LOCATION

(() => {
  const refs = {
    openLocationBtn: document.querySelector('[data-location-open]'),
    closeLocationBtn: document.querySelector('[data-location-close]'),
    location: document.querySelector('[data-location]'),

    openFranchiseBtn: document.querySelector('[data-franchise-open]'),
    closeFranchiseBtn: document.querySelector('[data-franchise-close]'),
    franchise: document.querySelector('[data-franchise]'),

    // body: document.querySelector('body'),
  };

  refs.openLocationBtn.addEventListener('click', toggleLocation);
  refs.closeLocationBtn.addEventListener('click', toggleLocation);

  refs.openFranchiseBtn.addEventListener('click', toggleFranchise);
  refs.closeFranchiseBtn.addEventListener('click', toggleFranchise);

  function toggleLocation() {
    refs.location.classList.toggle('is-hidden');
    // refs.body.classList.toggle('no-scroll');
  }

  function toggleFranchise() {
    refs.franchise.classList.toggle('is-hidden');
    // refs.body.classList.toggle('no-scroll');
  }
})();
