// Get references to the button and side menu elements
const sideMenusearch = document.querySelector('.search-engines');
const closeMenuBtnsearch = document.querySelector('.close-menu-search');


closeMenuBtnsearch.addEventListener('click', () => {
	sideMenusearch.style.left = '-700px';
});

// Add event listener to toggle button for opening and closing the side menu
const toggleButtonsearch = document.querySelector('.open-search');

toggleButtonsearch.addEventListener('click', () => {
  if (sideMenusearch.style.left === '0px') {
    sideMenusearch.style.left = '-350px';
  } else {
    sideMenusearch.style.left = '0';
  }
});

const toggleButtonsearch2 = document.querySelector('.open-search2');

toggleButtonsearch2.addEventListener('click', () => {
  if (sideMenusearch.style.left === '0px') {
    sideMenusearch.style.left = '-350px';
  } else {
    sideMenusearch.style.left = '0';
  }
});