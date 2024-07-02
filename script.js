window.addEventListener('scroll', () => {
  const scrollToKathismaButton = document.querySelector('.scroll-to-kathisma-button');
  if (window.pageYOffset <= 100) {
    if (!scrollToKathismaButton) {
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
    }
  } else {
    if (scrollToKathismaButton) {
      scrollToKathismaButton.remove();
    }
  }
});