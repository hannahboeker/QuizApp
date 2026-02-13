// VARIABLEN ERSTELLEN__________________________________________________

// Antwort Button
let antwortButton = document.querySelector('[data-js="antwortButton"]');
console.log(antwortButton.textContent);

const antwort = document.querySelector('[data-js="antwort"]');
console.log(antwort.textContent);

// Bookmark Icon
const frageSpeichern = document.querySelectorAll('[data-js="frageSpeichern"]');



//EVENT__________________________________________________________________________

//Button zeigt/versteck Antwort
antwortButton.addEventListener("click", () => {
  antwort.classList.toggle("hide");
  if (antwort.classList.contains("hide")) {
    antwortButton.textContent = "Zeig mir die Lösung!";
  } else {
    antwortButton.textContent = "Verstecke die Lösung!";
  }
});

//Bookmark Icon ändert Farbe

//1. Versuch // ändert nur erstes Icon
// frageSpeichern.addEventListener("click", () => {
//   frageSpeichern.classList.toggle("click");
// });

// Mit querySelectorALL und forEach alle ändern
frageSpeichern.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("click");
  });
});

