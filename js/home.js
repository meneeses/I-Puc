const selectElement = (element) => document.querySelector(element); 

selectElement('header').addEventListener('click', () => {
    selectElement('.mobile-menu').classList.toggle('active');
});