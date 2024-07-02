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
