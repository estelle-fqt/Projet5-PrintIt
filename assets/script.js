// Tableau d'obj chacun représente une img du slider et contient 2 propriétés : image (le chemin de l'img) et tagLine (texte afficher sous l'img)
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

let slideElements = document.querySelectorAll(".slide"); // Récupère ts les élements <li> ayant .slide contannt img et texte
let dots = document.querySelectorAll(".dot");

// Variable garde la trace du slide actuellement affiché
// Par défaut initialisée à 0 = 1er slide
let currentIndex = 0;

// Fonction actualise l'affichage du slider à chaque clic
function updateSlider() {
  // masque tous les slides et désélectione les points
  slideElements.forEach((slide, index) => {
    // forEach parcourt ts les slideElements et les dots
    slide.classList.remove("active"); // remove supprime la classe active
    dots[index].classList.remove("dot_selected"); // remove supprime la classe dot_selected
  });

  // affiche que le slide et dot correspondant à currentIndex
  slideElements[currentIndex].classList.add("active"); // le slide à l'index currentIndex reçoit la class active
  dots[currentIndex].classList.add("dot_selected"); // le point à l'index currentIndex reçoit la class dot_selected
}

// Utilisation des conditions if else
// Clic gauche
arrowLeft.addEventListener("click", () => {
  if (currentIndex === 0) {
    // si on est au 1er slide, revenir au dernier slide
    currentIndex = slideElements.length - 1;
  } else {
    // sinon, passe au slide précédent
    currentIndex--;
  }
  updateSlider();
});

// Clic droit
arrowRight.addEventListener("click", () => {
  if (currentIndex === slideElements.length - 1) {
    // si on est au dernier slide, revenir au 1er slide
    currentIndex = 0;
  } else {
    // sinon, passe au slide suivant
    currentIndex++;
  }
  updateSlider();
});

// Initialisation du slider à l'affichage du site pour afficher la 1er img et le 1er point
updateSlider();

/*// Utilisation de calculs avec modulo %
// Clic gauche
// Diminue currentIndex de 1 pour passer au précédent, + slideElements.length = évite les indices négatifs, % slideElements.length = ramène l'index dans les limites du tableau
arrowLeft.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + slideElements.length) % slideElements.length;
  updateSlider();
});

// Clic droit
// Augmente currentIndex de 1 pour passer au suivant, currentIndex + 1 = passer ua slide suivant , % slideElements.length = ramène l'index dans les limites du tableau
arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slideElements.length;
  updateSlider();
});
*/
