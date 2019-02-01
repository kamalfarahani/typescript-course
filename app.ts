function printable(constructorFn: Function): void {
  constructorFn.prototype.print = function () {
    console.log(this);
  }
}

@printable
class Person{
  public name: string;
  constructor() {
    this.name = 'KKK';
  }
}

const person = new Person();
person.print();

// Method decorators

function editable(isEditable: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
      descriptor.writable = isEditable;
    }
}

function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log(target, methodName, paramIndex);
}

class Project {
  constructor(public name: string){}

  @editable(false)
  public calculateBudget(): void {
    console.log('1000$');
  }

  public someMethod(param1: number, @printInfo param2: string) {
    console.log(param1, param2);
  }
}

const project = new Project('MMA');
project.calculateBudget();

//will raise error
//project.calculateBudget = () => console.log('HE HEH');
project.calculateBudget();


//Property decorators
