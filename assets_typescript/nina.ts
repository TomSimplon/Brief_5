import Character from "./character";

class Nina extends Character {
    constructor(health: number = 100, hunger: number = 100, public battery: number = 100) {
      super(health, hunger);
    }
    decreaseJauges() {
        if (this.health > 50) {
          this.health -= 10;
        } else if (this.health > 15) {
          this.health -= 6;
        } else if (this.health > 0) {
          this.health -= 2;
        }

        if (this.hunger > 50) {
            this.hunger -= 10;
          } else if (this.hunger > 15) {
            this.hunger -= 6;
          } else if (this.hunger > 0) {
            this.hunger -= 2;
          }

          if (this.battery > 50) {
            this.battery -= 10;
          } else if (this.battery > 15) {
            this.battery -= 6;
          } else if (this.battery > 0) {
            this.battery -= 2;
          }
      }
  }

  export default Nina

  