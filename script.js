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

// Add a button to scroll to the current kathisma
const scrollToKathismaButton = document.createElement('button');
scrollToKathismaButton.textContent = 'К Кафизме';
scrollToKathismaButton.addEventListener('click', () => {
  const currentKathisma = document.querySelector('.kathisma[style*="display: block"]');
  if (currentKathisma && window.pageYOffset <= 0) {
    currentKathisma.scrollIntoView({ behavior: 'smooth' });
  }
});
document.body.appendChild(scrollToKathismaButton);
