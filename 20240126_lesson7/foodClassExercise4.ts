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
        //console.log( this.#name );
    }
    eatOne(){

         
        // or this.#remaining = this.#remaining -1

        if ( this.#remaining > 0){
            //this.#remaining -= 1; // ⚠️ 更新 #remaining的值
            this.#remaining --

            console.log( `Slurp! One ${this.#name.toLowerCase()} eaten. ${this.#remaining} remaining`);
            } else{
            console.log( `Sorry, no more ${this.#name.toLowerCase()} remaining!`);

        }
    }
}


let banana = new Food('Banana', 4);

console.log(banana);

banana.whatIsThis();

banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();