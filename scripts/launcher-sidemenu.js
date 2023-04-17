// Get references to the button and side menu elements
const openMenuBtn = document.querySelector('.open-menu-btn');
const sideMenu = document.querySelector('.side-menu');
const closeMenuBtn = document.querySelector('.close-menu-btn');

 // Add event listeners to the open and close buttons
openMenuBtn.addEventListener('click', () => {
	sideMenu.style.right = '0';
});

closeMenuBtn.addEventListener('click', () => {
	sideMenu.style.right = '-700px';
});

// Add event listener to toggle button for opening and closing the side menu
const toggleButton = document.querySelector('.open-menu-btn2');

toggleButton.addEventListener('click', () => {
  if (sideMenu.style.right === '0px') {
    sideMenu.style.right = '-700px';
  } else {
    sideMenu.style.right = '0';
  }
});