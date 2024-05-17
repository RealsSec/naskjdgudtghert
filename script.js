document.addEventListener('DOMContentLoaded', function () {
    
    document.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
  
    
    document.addEventListener('mousedown', function (event) {
      if (event.button === 2) {
        event.preventDefault();
      }
    });
  });
  




  // Simple text-typing animation
const message = document.querySelector('.message h2');
const text = "Oops! Seems like you wandered off...";
let index = 0;

function typeText() {
    message.textContent += text[index];
    index++;
    if (index > text.length - 1) {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(typeText, 100);


