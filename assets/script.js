// Tableau d'obj où chacun représente une img du slider et contient 2 propriétés : image (le chemin de l'img) et tagLine (texte afficher sous l'img)
// Struture toutes les données des slides au même endroit (gestion + facile)
const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Sélection des éléments HTML = pr intéragir avec le DOM et modifier l'affichage en fct des clics
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

let slideElements = document.querySelectorAll(".slide"); // Récupère ts les élements <li> ayant .slide contenant img et texte
let dots = document.querySelectorAll(".dot");

// Variable garde la trace du slide actuellement affiché
let currentIndex = 0; // Par défaut initialisée à 0 = 1er slide

arrowLeft.addEventListener("click", function () {
  currentIndex--; // aller à l'img précedente (décrémente)

  if (currentIndex < 0) {
    // img -1 dans l'index
    currentIndex = slides.length - 1; // reviens à la dernière img
  }

  // changer l'img
  document.querySelector(".banner-img").src = slides[currentIndex].image;
  // changer le texte
  document.querySelector("#banner p").innerHTML = slides[currentIndex].tagLine;

  // désactiver les bullets points
  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });
  // activer le bullet point correspondant
  dots[currentIndex].classList.add("dot_selected");

  console.log("img précédente, index actuel :", currentIndex);
});

arrowRight.addEventListener("click", function () {
  currentIndex++; // aller à l'img suivante (incrémente)

  // vérifier si on dépasse le nbr d'img
  if (currentIndex >= slides.length) {
    // img 4 n'existe pas dans le tableau[0, 1, 2, 3]
    currentIndex = 0; // reviens au début
  }

  // changer l'img
  document.querySelector(".banner-img").src = slides[currentIndex].image;
  // changer le texte
  document.querySelector("#banner p").innerHTML = slides[currentIndex].tagLine;

  // désactiver tous les bullet points
  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });
  // activer le bullet point correspondant
  dots[currentIndex].classList.add("dot_selected");

  console.log("img suivante, index actuel :", currentIndex);
});
