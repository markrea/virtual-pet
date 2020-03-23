const Pet = require("../src/pet");

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  
    it('sets the name property', () => {
        const pet = new Pet('Fido');
    
        expect(pet.name).toEqual('Fido');
      });
    
    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
    
        expect(pet.age).toEqual(0);
      });
    
    it('has a initial hunger of 0', () => {
        const pet = new Pet('Fido');
    
        expect(pet.hunger).toEqual(0);
      });
    
    it('has a initial fitness of 10', () => {
        const pet = new Pet('Fido');
    
        expect(pet.fitness).toEqual(10);
      });
  });

  

 

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
   
    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.hunger).toEqual(5);
      });
    
     it('decrements the fitness by 3', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.fitness).toEqual(7);
      });
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a maximum of 10', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 5;
      pet.feed();
  
      expect(pet.hunger).toEqual(2);
    });
    it('decreases hunger to a minimum of 0', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 2;
      pet.feed();
  
      expect(pet.hunger).toEqual(0);
    });
  });
  describe('checkUp', () => {
    it('if fitness is 3 or less returns "I need a walk"', () => {
    const pet = new Pet('Fido');
    
    pet.fitness = 2;
    pet.checkUp();
    
    
    expect(pet.checkUp()).toEqual("I need a walk");
    });

    it('if hunger is 5 or more returns "I am hungry"', () => {
      const pet = new Pet('Fido');
      
      pet.hunger = 6;
      pet.checkUp();
      
    expect(pet.checkUp()).toEqual("I am hungry");
      });

    it('if hunger is 5 or more and fitness is 3 or less returns "I am hungry AND I need a walk', () => {
      const pet = new Pet('Fido');
      
      pet.fitness = 2
      pet.hunger = 6;
      pet.checkUp();
      
    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
      });

      it('if hunger is less than 5 and fitness is more than 3 returns "I feel great!', () => {
        const pet = new Pet('Fido');
        
        pet.fitness = 7
        pet.hunger = 2;
        pet.checkUp();
        
      expect(pet.checkUp()).toEqual("I feel great!");
        });

        it('temperature is greater than  returns "I feel great!', () => {
          const pet = new Pet('Fido');
          
          pet.fitness = 7
          pet.hunger = 2;
          pet.checkUp();
          
        expect(pet.checkUp()).toEqual("I feel great!");
          });
 
  })

