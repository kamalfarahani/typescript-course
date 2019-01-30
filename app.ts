class Person {
  public name: string;
  private type: string = 'Human';
  protected age: number;

  constructor(name: string, public username: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public printAge() {
    console.log(this.age);
  }

  public printType() {
    console.log(this.type);
  }
}

const kamal = new Person('Kamal', 'kamal', 22);
kamal.printAge();
kamal.printType();

//Getters and Setters
class Plant {
  private _species: string = 'Tree';

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length < 3) {
      this._species = 'Tree';
    } else {
      this._species = value;
    }
  }
}

const plant = new Plant();
plant.species = 'Flower';
console.log(plant.species);

// Static
class Helper {
  static PI: number = 3.14;
  static sayHello() {
    console.log('Hello');
  }
}

console.log(Helper.PI);
Helper.sayHello()

// Abstarct class
abstract class Project {
  public abstract calculateBudget(): number;
}

class MyProject extends Project {
  public calculateBudget() {
    return 2000;
  }
}

const project = new MyProject();
console.log(project.calculateBudget());


//Private constructor
class OnlyOne {
  private static instance: OnlyOne | null = null;
  static getInstance(): OnlyOne {
    if (this.instance == null) {
      this.instance = new OnlyOne('Machine');
    }

    return this.instance;
  }

  private constructor(public name: string){}
}

const onlyOne: OnlyOne = OnlyOne.getInstance();
console.log(onlyOne);
