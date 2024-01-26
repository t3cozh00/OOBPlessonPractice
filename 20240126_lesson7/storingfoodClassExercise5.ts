class Food {
    #name : string;
    #remaining : number;

    constructor(
        name : string,
        remaining : number){
            this.#name = name;
            this.#remaining = remaining;
        }
    
    whatIsThis(){
        console.log( this.#name );
    }

    eatOne(){
    
        // or this.#remaining = this.#remaining -1

        if ( this.#remaining > 0){
            this.#remaining -= 1; // ⚠️ 更新 #remaining 的值

            console.log( `Slurp! One ${this.#name.toLowerCase()} eaten. ${this.#remaining} remaining`);
            } else{
            console.log( `Sorry, no more ${this.#name.toLowerCase()} remaining!`);

        }
    }

    getAmount(){
        return this.#remaining;
    }

    getName(){
        return this.#name;
    }

    decreaseAmount(){
        if(this.#remaining > 0){
            this.#remaining -= 1;
        }
    }
}

class Refrigerator{

    #storage : Food[];

    constructor(){ //⚠️ no parameters
        this.#storage = [];  
    }

    putFood(food : Food){
        this.#storage.push(food);
    }

    getAndEatFood(nameOfFood : string){
        let foundFood : Food | undefined = undefined; // this is the syntax if you want to defined multiple possible data types for a variable

        // 1. find food which has the same name as nameOfFood from our storage
        // ⚠️ the idea of the loop: this variable is initialized undefined, and we loop over the whole storage, and see if we find any food, if we find any food whose name mathes, we wil store 'foundFood', which we can use later on 
        for ( let i = 0; i < this.#storage.length; i++ ){
            if (nameOfFood === this.#storage[i].getName()){
                foundFood = this.#storage[i];

                foundFood.decreaseAmount();

                if (foundFood.getAmount() === 0){
                    this.#storage.splice(i , 1); //// Remove the foundFood from storage
                }
    
                break; // breake statement will stop the for loop execution
            }
        }

        if ( foundFood === undefined ){
            console.log(`Sorry, no such food in this refrigerator!`);
            return;
        }

        // 2. consume the food
        // if we find food, then we can consume it  
        // ❓ then how to consume it

        console.log(`Slurp! One ${foundFood.getName().toLowerCase()} eaten. ${foundFood.getAmount()} remaining`);
    }

    /*print the contents in the following format:
    -----------
    |Apple 2
    |Banana 3
    -----------
   */
    getContents(){
        console.log(`-----------`);
        for ( let i = 0; i < this.#storage.length; i ++){
            //read the current student name
            console.log(`| ${this.#storage[i].getName
            ()} ${this.#storage[i].getAmount()}`);
        }
        console.log(`-----------`);
    }

}


let r = new Refrigerator();

let apple = new Food('Apple', 2);

let bananas = new Food('Banana', 3);

let grapes = new Food('Grape', 10);

r.putFood(apple);

r.putFood(bananas);

r.putFood(grapes);

r.getContents();

r.getAndEatFood('Apple');

r.getAndEatFood('Apple');

r.getAndEatFood('Grape');

r.getAndEatFood('Banana');

r.getAndEatFood('Apple');

r.getAndEatFood('Banana');

r.getContents();