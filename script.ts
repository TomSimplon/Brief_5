import Nina from "./assets_typescript/nina";
import Jep from "./assets_typescript/jep";

window.addEventListener('load', function() { // On récupère toutes les sections
  const sections = document.querySelectorAll('section:not(#accueil)');
  sections.forEach(function(section) {
    section.classList.add('hidden');
  });

  // Fonction pour mettre à jour les barres de jauge
function updateBar(bar: HTMLElement, value: number) {
  bar.style.width = `${value}%`;
}

// Création des instances des classes Nina et Jep
const nina: Nina = new Nina();
const jep: Jep = new Jep();

// Événement pour augmenter les jauges de Nina
const ninaHealthButton: Element | null = document.querySelector(".nina .health");
ninaHealthButton.addEventListener("click", () => {
if (nina.health < 100) {
  nina.health += 10;
  nina.updateBar(nina.ninaHealthBar, nina.health)
}
});

const ninaHungerButton: Element | null = document.querySelector(".nina .hunger");
ninaHungerButton.addEventListener("click", () => {
if (nina.hunger < 100) {
  nina.hunger += 10;
  nina.updateBar(nina.ninaHungerBar, nina.hunger);
}
});

const ninaBatteryButton: Element | null = document.querySelector(".nina .battery");
ninaBatteryButton.addEventListener("click", () => {
if (nina.battery < 100) {
  nina.battery += 10;
  nina.updateBar(nina.ninaBatteryBar, nina.battery);
}
});

// Événement pour augmenter les jauges de Jep
const jepHealthButton: Element | null = document.querySelector(".jep .health");
jepHealthButton.addEventListener("click", () => {
if (jep.health < 100) {
  jep.health += 10;
  updateBar(jep.jepHealthBar, jep.health);
}
});

const jepWaterButton: Element | null = document.querySelector(".jep .water");
jepWaterButton.addEventListener("click", () => {
if (jep.water < 100) {
  jep.water += 10;
  updateBar(jep.jepWaterBar, jep.water);
}
});

const jepHungerButton: Element | null = document.querySelector(".jep .hunger");
jepHungerButton.addEventListener("click", () => {
if (jep.hunger < 100) {
  jep.hunger += 10;
  updateBar(jep.jepHungerBar, jep.hunger);
}
});

// Navigation dynamique entre les sections
const ninaCharacterButton: Element | null = document.querySelector(".nina-character");
const jepCharacterButton: Element | null = document.querySelector(".jep-character");
const actionButton: Element | null = document.querySelector(".bouton");
const accueilSection: Element | null = document.querySelector("#accueil");
const defeatButton: Element | null = document.querySelector(".menu")

let lastCharacterClicked: string;

ninaCharacterButton.addEventListener("click", () => {
  lastCharacterClicked = 'nina';
  actionButton.addEventListener("click", () => {
    accueilSection.classList.add("hidden");
    jep.jepSection.classList.add('hidden');
    nina.ninaSection.classList.remove("hidden");
  });
});

jepCharacterButton.addEventListener("click", () => {
  lastCharacterClicked = 'jep';
  actionButton.addEventListener("click", () => {
    accueilSection.classList.add("hidden");
    nina.ninaSection.classList.add('hidden');
    jep.jepSection.classList.remove("hidden");
  });
});

defeatButton.addEventListener("click", () => {
  nina.defeatSection.classList.add('hidden');
  jep.defeatSection.classList.add('hidden');
  accueilSection.classList.remove("hidden");
})

const form: Element | null = document.querySelector('.form');
const button: Element | null = document.querySelector('.bouton');
const text: Element | null = document.querySelector('.text');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const name = (form.querySelector('input[type="text"]') as HTMLInputElement).value;
  text.innerHTML = `<p><strong>Vous êtes mort ${name} !</strong></p>`;
});

}); 



