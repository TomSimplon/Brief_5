import Character from "./character";

class Nina extends Character {
    constructor(health: number = 100, hunger: number = 100, public battery: number = 100) {
      super(health, hunger);
    }
  }

  export default Nina

  