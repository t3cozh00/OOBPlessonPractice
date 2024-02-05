/*
   Exercise 4 (objects/exercises/4-classes.js): Create a class for Food which allows the user to set the type of food and quantity. The class should have a method, which can be used to eat the food and quantity will decrease accordingly and a method to be able to describe what type of food it is.
*/

class Food {
  #name: string;
  #remaining: number;

  constructor(name: string, remaining: number) {
    this.#name = name;
    this.#remaining = remaining;
  }
  whatIsThis() {
    //console.log( this.#name );
  }
  eatOne() {
    // or this.#remaining = this.#remaining -1

    if (this.#remaining > 0) {
      //this.#remaining -= 1; // ⚠️ 更新 #remaining的值
      this.#remaining--;

      console.log(
        `Slurp! One ${this.#name.toLowerCase()} eaten. ${
          this.#remaining
        } remaining`
      );
    } else {
      console.log(`Sorry, no more ${this.#name.toLowerCase()} remaining!`);
    }
  }
}

let banana = new Food("Banana", 4);

console.log(banana);

banana.whatIsThis();

banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
