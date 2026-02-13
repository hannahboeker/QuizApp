//Click event für den ersten Lösungsbutton, wen der Button geklickt wird soll sich lösungstext einblenden. danch wieder ausbleden.
// 1. Button in javascript laden
//2. Click Event
//3. Classe hide erstellen und mit Classlistener toggeln

// VARIABLEN ERSTELLEN
let antwortButton = document.querySelector('[data-js="antwortButton"]');
console.log(antwortButton.textContent);

const antwort = document.querySelector('[data-js="antwort"]');
console.log(antwort.textContent);

//EVENT
antwortButton.addEventListener("click", () => {
  antwort.classList.toggle("hide");
  if (antwort.classList.contains("hide")) {
    antwortButton.textContent = "Zeig mir die Lösung!";
  } else {
    antwortButton.textContent = "Verstecke die Lösung!";
  }
});

//Wenn Button geklickt soll sich der TextContent ändern
