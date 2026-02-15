//VARIABLEN__________________________________________________________________________
const form = document.querySelector('[data-js="form"]');

//EVENTS__________________________________________________________________________________

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //1. Neue Daten in Variablen speichern
  const frage = event.target.inputfrage.value;
  const antwort = event.target.inputantwort.value;
  const tag = event.target.inputtag.value;

  //2. Daten in neu erzeugte HTML Elemente stecken

  //Elemente erzeugen / Klassen hinzufügen
  const article = document.createElement("article");
  article.classList.add("frage");

  const h2 = document.createElement("h2");
  h2.classList.add("textFrage");

  const p = document.createElement("p");
  p.classList.add("antwort");

  const button = document.createElement("button");
  button.classList.add("antwort_Button");

  const buttonText = document.createElement("span");

  const div = document.createElement("div");

  const span = document.createElement("span");
  span.classList.add("kategorie");

  //Icon laden
  const icon = document.createElement("img");
  icon.src = "../assets/image/260202-QuizzApp-Icons-Bookmark.svg";

  //3. Inhalt hinzugügen
  h2.textContent = frage;
  p.textContent = antwort;
  button.textContent = "Zeig mir die Antwort!";
  span.textContent = tag;

  //4. Inhalte im DOM plazieren
  document.body.append(article);
  article.append(h2);
  article.append(p);
  article.append(button);
  button.append(buttonText);
  article.append(div);
  div.append(span);
  article.append(icon);

  //fokus
  event.target.inputfrage.focus();

  //reset
  event.target.reset();
});

//COUNTER____________________________________________________
//1. Ich brauche eine maxlenghtzh für beide formular felder
//2. ein display unter dem feld das den value wue viel schon eingeben wurde minus die max lenght rechnet
//3. Wie kann ich die logoc für beide felder nutzen ohne den cide zu wiederhoemn? Eine Funktion erstellen, die für Feld ausrechnet

// /// COUNTER FUNKTION FÜR EIN TEXTFELD_________________________________

// // Counter als veränderbare variable / Textfeld als constante
// let counter = document.querySelector('[data-js="counter"]');
// const textFeld = document.querySelector('[data-js="textFeld"]');

// // var erstellen, die bei input die maxlength minus den input value rechnet
// // Dann textContent von counter verändern, indem er gleichgesetzt wird mit variable
// textFeld.addEventListener("input", (event) => {
//   let counterInput = event.target.maxLength - event.target.value.length;
//   counter.textContent = counterInput;
// });

//COUNTER FÜR ALLE TEXTFELDER ________________________________________________________
// querySelectorALL greift auf NodeList zu. Ist kein Array aber Array ähnlich, hat index und lenght
let counter = document.querySelectorAll('[data-js="counter"]');
const textFelder = document.querySelectorAll('[data-js="textFeld"]');

// forEach als Methode um über eine Liste von Elementen zu interieren (Mach etwas für jedes Element dieser Sammlung)
textFelder.forEach((textFelder, index) => {
  textFelder.addEventListener("input", (event) => {
    let counterInput = event.target.maxLength - event.target.value.length;
    // counter.textContent = counterInput; --> klappt nicht weil querySelectorALL kein Element sondern eine Liste ausgibt und eine Liste hat kein textContent, nur jedes einzelne Element der Liste hat das
    counter[index].textContent = counterInput;
  });
});
