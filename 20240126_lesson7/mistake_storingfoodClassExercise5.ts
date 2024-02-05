class Food {
  #name: string;
  #remaining: number;

  constructor(name: string, remaining: number) {
    this.#name = name;
    this.#remaining = remaining;
  }

  getAmount() {
    return this.#remaining;
  }

  getName() {
    return this.#name;
  }

  decreaseAmount() {
    if (this.#remaining > 0) {
      this.#remaining--;
    }
  }
}

class Refrigerator {
  #storage: Food[];

  constructor() {
    this.#storage = [];
  }

  putFood(food: Food) {
    this.#storage.push(food);
  }

  getAndEatFood(nameOfFood: string) {
    let foundFood: Food | undefined = undefined;

    for (let i = 0; i < this.#storage.length; i++) {
      if (nameOfFood === this.#storage[i].getName()) {
        foundFood = this.#storage[i];

        foundFood.decreaseAmount();

        if (this.#storage[i].getAmount() === 0) {
          this.#storage.splice(i, 1); // Remove the foundFood from storage
        }

        break; // Stop the for loop execution
      }
    }

    if (foundFood === undefined) {
      console.log(`Sorry, no such food in this refrigerator!`);
      return;
    }

    foundFood.decreaseAmount(); //此处是调用这个方法
    // let remaininFoundFood = foundFood.decreaseAmount();
    // remaininFoundFood --;
    // ⚠️ @Chatgpt: 这段代码中，你首先获取了 foundFood 的剩余数量 remainingFoundFood，然后将其减去 1。
    //但是这并不会影响 foundFood 对象的内部状态，因为你只是在一个新的变量上进行操作。

    console.log(
      `Slurp! One ${foundFood
        .getName()
        .toLowerCase()} eaten. ${foundFood.getAmount()} remaining`
    );
  }
}

let r = new Refrigerator();
let apple = new Food("Apple", 2);
let bananas = new Food("Banana", 3);

r.putFood(apple);
r.putFood(bananas);
r.getAndEatFood("Apple");
// r.getAndEatFood('Apple');
// r.getAndEatFood('Apple');

r.getAndEatFood("Banana");
// r.getAndEatFood('Banana');
// r.getAndEatFood('Banana');
// r.getAndEatFood('Banana');
