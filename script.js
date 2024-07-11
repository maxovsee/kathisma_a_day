// кафизма в день
let kathismaCount = 12;

function showKathisma() {
  const kathismaElement = document.getElementById(`kathisma-${kathismaCount}`);
  kathismaElement.style.display = 'block';

  setTimeout(() => {
    kathismaElement.style.display = 'none';
    kathismaCount = (kathismaCount % 365) + 1; // assuming you have 365 kathismas
    showKathisma();
  }, 86400000); // 1 day in milliseconds
}

showKathisma();

// Add a button to scroll to the current kathisma, if the user is at the top of the page
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