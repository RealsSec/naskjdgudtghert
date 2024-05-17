const floatingGif = document.getElementById('floating-gif');

floatingGif.addEventListener('mouseover', () => {
  floatingGif.style.transform = 'scale(1.1)'; /* Increase size slightly */
});

floatingGif.addEventListener('mouseout', () => {
  floatingGif.style.transform = 'scale(1)';  /* Reset to normal size */
});
