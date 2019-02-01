interface NamedPerson {
  firstName: string
  age?: number,
  sayHello(): void
}

function greet(person: NamedPerson) {
  console.log(`Hello ${person.firstName}.`);
  person.sayHello();
}

const person = {
  firstName: 'Kamal',
  age: 22,
  sayHello() {
    console.log('Heeeeeeeeeello');
  }
}

const person2 = {
  firstName: 'Max',
  sayHello() {
    console.log('Helllllllo');
  }
}

greet(person);
console.log('----------------------------')
greet(person2);
console.log('----------------------------')

class Person implements NamedPerson {
  constructor(public firstName: string, public age: number){}

  public sayHello() {
    console.log('Hello');
  }
}

const person3 = new Person('David', 20);
greet(person3);

// Function Type interface

interface TwoNumberArgumetFunc {
    (arg1: number, arg2: number): number
}

const f : TwoNumberArgumetFunc = (x1: number, x2: number) => x1 * x2;
console.log(f(20,30));

//Interface inheritance
interface LatsNamedPerson extends NamedPerson {
  lastName: string
}

const person4: LatsNamedPerson = {
  firstName: 'Kamal',
  lastName: 'Max',
  age: 22,
  sayHello() {
    console.log('Hellllo');
  }
}

greet(person4);
