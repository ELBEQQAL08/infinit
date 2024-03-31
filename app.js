const menu_mob = document.querySelector(".menu");
let links_mob = document.querySelector(".links-mob");
const links__trans = document.querySelector(".links__trans_mob");

menu_mob.addEventListener("click", () => {
  links_mob.classList.toggle("links-mob");
  links__trans.classList.toggle("links_trans");
});
