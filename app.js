const menu_mob = document.querySelector(".menu");

console.log(menu_mob);

const close_mob = document.querySelector(".close-display");

console.log(close_mob);

menu_mob.addEventListener("click", () => {
  close_mob.style.visibility = "visible";
  menu_mob.style.visibility = "hidden";
});

close_mob.addEventListener("click", () => {
  close_mob.style.visibility = "hidden";
  menu_mob.style.visibility = "visible";
});
