# this keyword in Javascript

'this' keyword refers to the object which it belongs to.
The value of 'this' differs depending on how a function is invoked (the call site).

## Installation

By simply cloning this repository.


## Usage

```javascript
//Simple Function Call

function greetingMessage(){
    console.log(`Welcome ${this.name}`);
}

greetingMessage(); //Welcome undefined

// var name = "CrashyCode"; //In browser mode

globalThis.name = 'CrashyCode'; //In Node mode

greetingMessage(); //Welcome CrashyCode


//In this case 'this' will refer to global object.

//Implicit Binding

let myCar = {
    name : 'Lambo',
    color : 'black',
    revealName : function(){
        console.log(this.name);
    }
}



myCar.revealName(); //Lambo

//In this 'this' will point to an object on which function is called.


// Explicit Binding

function revealColor(){
    console.log(this.color);
}

let myCar2 = {
    name : 'BMW',
    color : 'black'
}

revealColor.call(myCar2); //black

//In this we can explicitly set 'this' to point to a certain value using call, apply or bind.

// new Keyword

function message(text){
    this.text = text;
}

let msg = new message('Hello');

console.log(msg.text); //Hello

// 'new' keyword constructs a new object to which 'this' will point.

```

