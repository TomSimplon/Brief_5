import Nina from "./assets_typescript/nina";
import Jep from "./assets_typescript/jep";

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

