import Nina from "./assets_typescript/nina";
import Jep from "./assets_typescript/jep";


// Fonction pour mettre à jour les barres de jauge
function updateBar(bar: HTMLElement, value: number) {
    bar.style.width = `${value}%`;
  }

  // Récupération des éléments HTML pour les barres de jauge
const ninaHealthBar: Element | null = document.querySelector(".nina .color_bar .red");
const ninaHungerBar: Element | null = document.querySelector(".nina .color_bar .orange");
const ninaBatteryBar: Element | null = document.querySelector(".nina .color_bar .green");
const jepHealthBar: Element | null = document.querySelector(".jep .color_bar .red");
const jepHungerBar: Element | null = document.querySelector(".jep .color_bar .orange");
const jepWaterBar: Element | null = document.querySelector(".jep .color_bar .blue");

// Création des instances des classes Nina et Jep
const nina: Nina = new Nina();
const jep: Jep = new Jep();

// Événement pour augmenter les jauges de Nina
const ninaHealthButton: Element | null = document.querySelector(".nina .health");
ninaHealthButton.addEventListener("click", () => {
  if (nina.health < 100) {
    nina.health += 10;
    updateBar(ninaHealthBar, nina.health);
  }
});

const ninaHungerButton: Element | null = document.querySelector(".nina .hunger");
ninaHungerButton.addEventListener("click", () => {
  if (nina.hunger < 100) {
    nina.hunger += 10;
    updateBar(ninaHungerBar, nina.hunger);
  }
});

const ninaBatteryButton: Element | null = document.querySelector(".nina .battery");
ninaBatteryButton.addEventListener("click", () => {
  if (nina.battery < 100) {
    nina.battery += 10;
    updateBar(ninaBatteryBar, nina.battery);
  }
});

// Événement pour augmenter les jauges de Jep
const jepHealthButton: Element | null = document.querySelector(".jep .health");
jepHealthButton.addEventListener("click", () => {
  if (jep.health < 100) {
    jep.health += 10;
    updateBar(jepHealthBar, jep.health);
  }
});

const jepWaterButton: Element | null = document.querySelector(".jep .water");
jepWaterButton.addEventListener("click", () => {
  if (jep.water < 100) {
    jep.water += 10;
    updateBar(jepWaterBar, jep.water);
  }
});

const jepHungerButton: Element | null = document.querySelector(".jep .hunger");
jepHungerButton.addEventListener("click", () => {
  if (jep.hunger < 100) {
    jep.hunger += 10;
    updateBar(jepHungerBar, jep.hunger);
  }
});

// Fonction pour mettre à jour les jauges de Nina et Jep
function updateBars() {
  updateBar(ninaHealthBar, nina.health);
  updateBar(ninaHungerBar, nina.hunger);
  updateBar(ninaBatteryBar, nina.battery);
  updateBar(jepHealthBar, jep.health);
  updateBar(jepHungerBar, jep.hunger);
  updateBar(jepWaterBar, jep.water);
}

// Appel de la fonction updateBars pour mettre à jour les jauges initiales
nina.decreaseJauges();
updateBars();

