//Simple Function Call

function greetingMessage(){
    console.log(`Welcome ${this.name}`);
}

greetingMessage(); //Welcome undefined

// var name = "CrashyCode"; //In browser mode

globalThis.name = 'CrashyCode'; //In Node mode

greetingMessage(); //Welcome CrashyCode


//Implicit Binding

let myCar = {
    name : 'Lambo',
    color : 'black',
    revealName : function(){
        console.log(this.name);
    }
}



myCar.revealName(); //Lambo


// Explicit Binding

function revealColor(){
    console.log(this.color);
}

let myCar2 = {
    name : 'BMW',
    color : 'black'
}

revealColor.call(myCar2); //black

// new Keyword

function message(text){
    this.text = text;
}

let msg = new message('Hello');

console.log(msg.text); //Hello