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
 



/* bonus: menu sluiten met escape */
// window.onkeydown = handleKeydown;

// function handleKeydown(event) {
//   if (event.key == "Escape") {
//     var deNav = document.querySelector("nav");
//     deNav.classList.remove("toonMenu");
//   }
// }