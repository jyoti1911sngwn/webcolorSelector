document.addEventListener('DOMContentLoaded', () => {
    const mainButton = document.getElementById('main-button');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-btn');
  
    mainButton.addEventListener('click', () => {
      popup.style.display = 'block';
      setTimeout(() => popup.style.transform = 'translateX(0)', 10);
    });
  
    closeButton.addEventListener('click', () => {
      popup.style.transform = 'translateX(100%)';
      setTimeout(() => popup.style.display = 'none', 300);
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === popup) {
        popup.style.transform = 'translateX(100%)';
        setTimeout(() => popup.style.display = 'none', 300);
      }
    });
  
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const color = event.target.getAttribute('data-color');
        mainButton.style.backgroundColor = color;
        popup.style.transform = 'translateX(100%)';
        setTimeout(() => popup.style.display = 'none', 300); 
      });
    });
  });
  