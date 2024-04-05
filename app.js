// First Section

const menu_mob = document.querySelector(".menu");
let links_mob = document.querySelector(".links-mob");

menu_mob.addEventListener("click", () => {
  links_mob.classList.toggle("links-mob");
});

// Second Section

const dynamicText = document.querySelector("h1 span");
dynamicText.classList.add("stop-blinking");
const Words = ["REACH", "ENGAGE", "CONVERT"];

let wordIndex = 0;
let charIndex = 0;
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
