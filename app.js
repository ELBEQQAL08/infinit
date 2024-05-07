// First Section

const menu__mob = document.querySelector(".menu");
const links__mob = document.querySelector(".links__mob");
const links__hidden = document.querySelector(".links__visible");
const close__visible = document.querySelector(".close");
<<<<<<< HEAD
menu__mob.style.cursor = "pointer";

menu__mob.addEventListener("click", () => {
  links__hidden.classList.toggle("links__visible");
});

close__visible.addEventListener("click", () => {
  links__mob.classList.toggle("links__mob");
  links__hidden.classList.remove(".links__visible");
=======
const container = document.querySelector(".links-mob__container");
menu__mob.style.cursor = "pointer";
close__visible.style.cursor = "pointer";

// Visible Links And Remove ClassName("links__mob")

menu__mob.addEventListener("click", () => {
  container.classList.add("links__visible");
  container.classList.remove("links__mob");
});

// Hide Links And Remove ClassName("links__visible")

close__visible.addEventListener("click", () => {
  container.classList.add("links__mob");
  container.classList.remove("links__visible");
>>>>>>> 08e107f (last commit)
});

// Second Section

const dynamicText = document.querySelector("h1 span");
dynamicText.classList.add("stop-blinking");
const Words = ["REACH", "ENGAGE", "CONVERT"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = Words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  if (!isDeleting && charIndex < currentWord.length) {
    // if condition is True, type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // if condition is True, remote the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // if word is deleted then switch to the next word
    dynamicText.classList.remove("stop-blinking");
    isDeleting = !isDeleting;
    wordIndex = isDeleting ? (wordIndex + 1) % Words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();
