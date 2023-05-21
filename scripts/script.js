let a = false;
let nav = document.querySelector("nav");
let menu = document.getElementById("mob-menu");
function toggleMobMenu(){
  if(a===false){
    nav.style.width="40vw";
    a=true;
  } else if(a===true){
    nav.style.width="0";
    a=false;
  }
}
menu.addEventListener('click',toggleMobMenu);
