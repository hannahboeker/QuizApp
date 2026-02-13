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
