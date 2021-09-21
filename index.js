const burgerBtn = document.querySelector('.burger-menu-button');
const burgerMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelectorAll('.links');
console.log(menuItem)

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  if(burgerBtn.classList.contains('active')) {
    burgerBtn.style.position = 'fixed';
  } else burgerBtn.style.position = 'absolute';
});

menuItem.forEach(element => {
  element.addEventListener('click', () => {
    burgerBtn.classList.remove('active');
    burgerMenu.classList.remove('active');
    burgerBtn.style.position = 'absolute';
  })
});

