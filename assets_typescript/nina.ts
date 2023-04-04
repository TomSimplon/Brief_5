import Character from "./character";

class Nina extends Character {
  ninaHealthBar: Element | null = document.querySelector("#nina .color_bar .red");
  ninaHungerBar: Element | null = document.querySelector("#nina .color_bar .orange");
  ninaBatteryBar: Element | null = document.querySelector("#nina .color_bar .green");
  ninaSection: Element | null = document.querySelector("#nina");
  defeatSection: Element | null = document.querySelector('#defeat');
  constructor(health: number = 100, hunger: number = 100, public battery: number = 100) {
    super(health, hunger);
    setInterval(() => {
      if (!this.ninaSection?.classList.contains('hidden')) {
        this.decreaseJaugesHealth();
        this.decreaseJaugesHunger();
        this.decreaseJaugesBattery();
      } else {
        this.health = 100;
        this.hunger = 100;
        this.battery = 100;
      }
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
      if(this.ninaHealthBar) {
        this.updateBar(this.ninaHealthBar, this.health)
      }
      if(this.health <= 0) {
        this.ninaSection.classList.add('hidden');
        this.defeatSection.classList.remove('hidden');
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
        if(this.ninaHungerBar) {
          this.updateBar(this.ninaHungerBar, this.hunger)
        }
        if(this.hunger <= 0) {
          this.ninaSection.classList.add('hidden');
          this.defeatSection.classList.remove('hidden');
        }
    }

    decreaseJaugesBattery() {
        if (this.battery > 50) {
          this.battery -= 10;
        } else if (this.battery > 15) {
          this.battery -= 6;
        } else if (this.battery > 0) {
          this.battery -= 2;
        }
        if(this.ninaBatteryBar) {
          this.updateBar(this.ninaBatteryBar, this.battery)
        }
        if(this.battery <= 0) {
          this.ninaSection.classList.add('hidden');
          this.defeatSection.classList.remove('hidden');
        }
    }
}

export default Nina;