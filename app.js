// First Section

const menu__mob = document.querySelector(".menu");
const links__mob = document.querySelector(".links__mob");
const links__hidden = document.querySelector(".links__visible");
const container_div = document.querySelector(".links-mob__container");
const close__visible = document.querySelector(".close");
menu__mob.style.cursor = "pointer";
close__visible.style.cursor = "pointer";

// Visible Links With ClassName(".links__visible")

menu__mob.addEventListener("click", () => {
  container_div.classList.toggle("links__visible");
  container_div.classList.remove("links__mob");
});

// Hide Links With ClassName(".links__hidden")

close__visible.addEventListener("click", () => {
  container_div.classList.toggle("links__mob");
  container_div.classList.remove("links__visible");
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

