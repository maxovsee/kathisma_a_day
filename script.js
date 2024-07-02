const kathismas = document.querySelectorAll('.kathisma');
const today = new Date();
const dayOfYear = today.getDate() + (today.getMonth() * 30); // rough estimate, adjust as needed

kathismas.forEach((kathisma, index) => {
  if (index === dayOfYear % kathismas.length) {
    kathisma.style.display = 'block';
  } else {
    kathisma.style.display = 'none';
  }
});

// Add a button to scroll to the current kathisma, if the user is at the top of the page
window.addEventListener('scroll', () => {
  const scrollToKathismaButton = document.querySelector('.scroll-to-kathisma-button');
  if (window.pageYOffset <= 100) {
    if (!scrollToKathismaButton) {
      const newButton = document.createElement('button');
      newButton.textContent = 'Scroll to Current Kathisma';
      newButton.classList.add('scroll-to-kathisma-button');
      newButton.style.position = 'fixed';
      newButton.style.top = '20px';
      newButton.style.right = '20px';
      newButton.style.zIndex = '999';
      newButton.addEventListener('click', () => {
        const currentKathisma = document.querySelector('.kathisma[style*="display: block"]');
        if (currentKathisma) {
          currentKathisma.scrollIntoView({ behavior: 'smooth' });
        }
      });
      document.body.appendChild(newButton);
    }
  } else {
    if (scrollToKathismaButton) {
      scrollToKathismaButton.remove();
    }
  }
});
