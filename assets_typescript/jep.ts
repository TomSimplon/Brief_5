import Character from "./character";

class Jep extends Character {
    constructor(health: number = 100, hunger: number = 100, public water: number = 100) {
      super(health, hunger);
    }
  }
  
  export default Jep
