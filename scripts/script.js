// JavaScript Document
/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

const menuButton = document.querySelector("nav button:nth-of-type(2)");
const deNav = document.querySelector("header nav");
 
menuButton.onclick = toggleMenu;
 
function toggleMenu(){
    menuButton.classList.toggle("kruisje")
    deNav.classList.toggle("toonMenu")
}
 











// buttons 'ontdekken' 'voor jou' 'volgend' laten veranderen met css als je er op klikt.
const buttons = document.querySelectorAll('button[aria-selected]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Eerst alles naar false
    buttons.forEach(b => b.setAttribute('aria-selected', 'false'));

    // De aangeklikte naar true
    button.setAttribute('aria-selected', 'true');
  });
});





