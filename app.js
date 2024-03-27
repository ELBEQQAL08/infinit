const menu_mob = document.querySelector(".menu");

console.log(menu_mob);

const close_mob = document.querySelector(".close");

console.log(close_mob);

menu_mob.addEventListener("click", () => {
  close_mob.style.visibility = "visible";
  menu_mob.style.visibility = "hidden";
});

// TODOS:
// click on menu icon should display consol.log
// click on menu icon should display close icon and hidden menu icon
