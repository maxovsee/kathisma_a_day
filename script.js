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

// Add a button to scroll to the current kathisma, if the current kathisma is visible
function createScrollToKathismaButton() {
  const currentKathisma = document.querySelector('.kathisma[style*="display: block"]');
  if (currentKathisma && isElementInViewport(currentKathisma)) {
    const scrollToKathismaButton = document.createElement('button');
    scrollToKathismaButton.textContent = 'К Кафизме';
    scrollToKathismaButton.classList.add('scroll-to-kathisma-button');
    scrollToKathismaButton.style.position = 'fixed';
    scrollToKathismaButton.style.bottom = '20px';
    scrollToKathismaButton.style.right = '20px';
    scrollToKathismaButton.style.zIndex = '999';
    scrollToKathismaButton.addEventListener('click', () => {
      currentKathisma.scrollIntoView({ behavior: 'smooth' });
    });
    document.body.appendChild(scrollToKathismaButton);
  }
}

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Call the createScrollToKathismaButton function on page load
createScrollToKathismaButton();

// Add a scroll event listener to update the button visibility
window.addEventListener('scroll', () => {
  const scrollToKathismaButton = document.querySelector('.scroll-to-kathisma-button');
  if (window.pageYOffset <= 100) {
    if (!scrollToKathismaButton) {
      createScrollToKathismaButton();
    }
  } else {
    if (scrollToKathismaButton) {
      scrollToKathismaButton.remove();
    }
  }
});