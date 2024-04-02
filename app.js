const menu_mob = document.querySelector(".menu");
let links_mob = document.querySelector(".links_mob");

menu_mob.addEventListener("click", () => {
  links_mob.classList.toggle("links_mob");
});
