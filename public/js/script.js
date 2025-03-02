// script.js

// Function to auto-hide flash messages after a few seconds
const flashMessages = document.querySelectorAll('.flash-success, .flash-error');
if (flashMessages) {
  setTimeout(() => {
    flashMessages.forEach((message) => {
      message.style.display = 'none';
    });
  }, 3000); // Hide after 3 seconds
}

// Example: Adding functionality for a modal or pop-up for skills (future feature)
// const openModalButton = document.getElementById('openModal');
// const modal = document.getElementById('modal');
// const closeModalButton = document.getElementById('closeModal');

// if (openModalButton && modal && closeModalButton) {
//   openModalButton.addEventListener('click', () => {
//     modal.style.display = 'block';
//   });

//   closeModalButton.addEventListener('click', () => {
//     modal.style.display = 'none';
//   });

//   window.addEventListener('click', (e) => {
//     if (e.target === modal) {
//       modal.style.display = 'none';
//     }
//   });
// }
