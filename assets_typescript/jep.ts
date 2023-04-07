import Character from "./character";

class Jep extends Character {
  jepHealthBar: Element | null = document.querySelector("#jep .color_bar .red");
  jepHungerBar: Element | null = document.querySelector("#jep .color_bar .orange");
  jepWaterBar: Element | null = document.querySelector("#jep .color_bar .blue");
  jepSection: Element | null = document.querySelector("#jep");
  defeatSection: Element | null = document.querySelector('#defeat');
  audioJep: HTMLAudioElement | null = document.querySelector("#audio-jep");
  audioDefeat = document.querySelector("#audio-defeat") as HTMLAudioElement;
  audioReviens = document.querySelector("#reviens_jep") as HTMLAudioElement;
  constructor(health: number = 100, hunger: number = 100, public water: number = 100) {
    super(health, hunger);
    setInterval(() => {
      if (!this.jepSection?.classList.contains('hidden')) {
        this.decreaseJaugesHealth();
        this.decreaseJaugesHunger();
        this.decreaseJaugesWater();
      } else {
        this.health = 100;
        this.hunger = 100;
        this.water = 100;
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
        this.playAudioReviens();
      }
      if(this.jepHealthBar) {
        this.updateBar(this.jepHealthBar, this.health)
      }
      if(this.health <= 0) {
        this.jepSection.classList.add('hidden');
        this.defeatSection.classList.remove('hidden');
        this.stopAudioJep();
        this.AudioDefeat();
        this.stopAudioReviens();
      }
    }

    decreaseJaugesHunger() {
      if (this.hunger > 50) {
          this.hunger -= 10;
        } else if (this.hunger > 15) {
          this.hunger -= 6;
        } else if (this.hunger > 0) {
          this.hunger -= 2;
          this.playAudioReviens();
        }
        if(this.jepHungerBar) {
          this.updateBar(this.jepHungerBar, this.hunger)
        }
        if(this.hunger <= 0) {
          this.jepSection.classList.add('hidden');
          this.defeatSection.classList.remove('hidden');
          this.stopAudioJep();
          this.AudioDefeat();
          this.stopAudioReviens();
        }
    }

    decreaseJaugesWater() {
        if (this.water > 50) {
          this.water -= 10;
        } else if (this.water > 15) {
          this.water -= 6;
        } else if (this.water > 0) {
          this.water -= 2;
          this.playAudioReviens();
        }
        if(this.jepWaterBar) {
          this.updateBar(this.jepWaterBar, this.water)
        }
        if(this.water <= 0) {
          this.jepSection.classList.add('hidden');
          this.defeatSection.classList.remove('hidden');
          this.stopAudioJep();
          this.AudioDefeat();
          this.stopAudioReviens();
        }
    }

    playAudioJep() {
      this.audioJep.play();
      this.audioJep.loop = true;
    }
    
    stopAudioJep() {
      this.audioJep.pause();
      this.audioJep.currentTime = 0;
    }

    AudioDefeat() {
      this.audioDefeat.play();
      this.audioDefeat.loop = true;
    }

    playAudioReviens() {
      this.audioReviens.play();
    }

    stopAudioReviens() {
      this.audioReviens.pause();
      this.audioReviens.currentTime = 0;
    }

}

export default Jep;