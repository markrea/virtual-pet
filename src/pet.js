const AGE_INCREMENT = 1; 

const HUNGER_INCREMENT = 5;
const HUNGER_DECREMENT = 3;
const MINIMUM_HUNGER = 0;

const FITNESS_DECREMENT = 3;
const FITNESS_INCREMENT = 4;
const MAXIMUM_FITNESS = 10;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
} 
Pet.prototype.growUp = function() {
    this.age += AGE_INCREMENT;
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_DECREMENT;
};
Pet.prototype.walk = function() {
   if((this.fitness + FITNESS_INCREMENT) <= MAXIMUM_FITNESS){
    this.fitness += FITNESS_INCREMENT;
   } else {
    this.fitness = MAXIMUM_FITNESS;
   }
};
Pet.prototype.feed = function() {
    if ((this.hunger - HUNGER_DECREMENT) >= MINIMUM_HUNGER){
    this.hunger -= HUNGER_DECREMENT;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }

}

module.exports = Pet;