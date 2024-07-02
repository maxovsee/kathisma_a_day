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

let scrollToKathismaButton = null;

function createScrollToKathismaButton() {
  const newButton = document.createElement('button');
  newButton.textContent = 'К Кафизме';
  newButton.classList.add('scroll-to-kathisma-button');
  newButton.style.position = 'fixed';
  newButton.style.bottom = '20px';
  newButton.style.right = '20px';
  newButton.style.zIndex = '999';
  newButton.addEventListener('click', () => {
    const currentKathisma = document.querySelector('.kathisma[style*="display: block"]');
    if (currentKathisma) {
      currentKathisma.scrollIntoView({ behavior: 'smooth' });
    }
  });
  document.body.appendChild(newButton);
  return newButton;
}

function toggleScrollToKathismaButton() {
  if (window.pageYOffset <= 100) {
    if (!scrollToKathismaButton) {
      scrollToKathismaButton = createScrollToKathismaButton();
    }
  } else {
    if (scrollToKathismaButton) {
      scrollToKathismaButton.remove();
      scrollToKathismaButton = null;
    }
  }
}

window.addEventListener('scroll', toggleScrollToKathismaButton);
