import Character from "./character";

class Jep extends Character {
    constructor(health: number = 100, hunger: number = 100, public water: number = 100) {
      super(health, hunger);
    }
    decreaseJauges() {
        if (this.health > 50) {
          this.health -= 10;
          this.hunger -= 10;
          this.water -= 10;
        } else if (this.health > 15) {
          this.health -= 6;
          this.hunger -= 6;
          this.water -= 6;
        } else if (this.health > 0) {
          this.health -= 2;
          this.hunger -= 2;
          this.water -= 2;
        }
      }
  }
  
  export default Jep
