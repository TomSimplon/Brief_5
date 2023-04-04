import Character from "./character";

class Jep extends Character {
  jepHealthBar: Element | null = document.querySelector("#jep .color_bar .red");
  jepHungerBar: Element | null = document.querySelector("#jep .color_bar .orange");
  jepWaterBar: Element | null = document.querySelector("#jep .color_bar .blue");
  constructor(health: number = 100, hunger: number = 100, public water: number = 100) {
    super(health, hunger);
    setInterval(() => {
      this.decreaseJaugesHealth();
      this.decreaseJaugesHunger();
      this.decreaseJaugesWater();
    }, 1000);
  }
 
  updateBar(bar: Element, value: number) {
    bar.style.width = `${value}%`;
  }
  decreaseJaugesHealth() {
      if (this.health > 50) {
        this.health -= 10;
      } else if (this.health > 15) {
        this.health -= 6;
      } else if (this.health > 0) {
        this.health -= 2;
      }
      if(this.jepHealthBar) {
        this.updateBar(this.jepHealthBar, this.health)
      }
    }

    decreaseJaugesHunger() {
      if (this.hunger > 50) {
          this.hunger -= 10;
        } else if (this.hunger > 15) {
          this.hunger -= 6;
        } else if (this.hunger > 0) {
          this.hunger -= 2;
        }
        if(this.jepHungerBar) {
          this.updateBar(this.jepHungerBar, this.hunger)
        }
    }

    decreaseJaugesWater() {
        if (this.water > 50) {
          this.water -= 10;
        } else if (this.water > 15) {
          this.water -= 6;
        } else if (this.water > 0) {
          this.water -= 2;
        }
        if(this.jepWaterBar) {
          this.updateBar(this.jepWaterBar, this.water)
        }
    }
}

export default Jep;