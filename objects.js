// object literal

/*
var john = {
    
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1998,
    family : ['Michael', 'Bob', 'Emilly'],
    job: 'teacher',
    isMarried: false
    
    
};
console.log(john.firstName);
console.log(john['lastName']);
var y = 'birthYear';
console.log(john[y]);


john.job = 'driver';
john['isMarried'] = true;
console.log(john);
    

// new object syntax

var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Tavares';
jane['birthYear'] = 1998;    
    
    console.log(jane); */



/***********************
* Object and methods 
*/

/*
var john = {
    
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1996,
    family : ['Michael', 'Bob', 'Emilly'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age =  2019 - this.birthYear; // this.algo , this significa o objeto atual.
    }
    
};


john.job = 'Operador';
john.calcAge();
console.log(john); */

// bmi calc with objetcs and methods

var john = {
    
    fullName: 'John Smith',
    mass: 96 ,
    height: 1.75,
    calcBmi: function () {
        this.bmi1 = this.mass / (this.height * this.height);
    }
};

john.calcBmi();
console.log(john);


var mike = {
    
    fullName: 'Mike Strauss',
    mass: 96,
    height: 1.75,
    calcBmi: function() {
        this.bmi2 = this.mass / (this.height * this.height);
    }
};

console.log(mike);
mike.calcBmi();

if (john.bmi1 > mike.bmi2) {
    console.log(john.fullName + ' has the highest Bmi ' + john.bmi1);
} else if (mike.bmi2 > john.bmi1) {
    console.log(mike.fullName + ' has the highest Bmi ' + mike.bmi2);
} else {
    console.log('Bmi draw.');
}





