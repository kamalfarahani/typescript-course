
let myNumber: number = 10;
let myStr: string;
let myArr: number[] = [1,2,3,4,5];;

//Tuple
let myTuple: [string, number] = ['Kamal', 100];

//enum
enum Color {
  Red, // 0
  Green, // 1
  Blue // 2
}

let myColor = Color.Red;

//any
let myAny: any;
myAny = 10;
myAny = {name: 'any'};

//function
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

let f: (val1: number, val2: number) => number = multiply;

//Objects
let userData: {name: string, age: number} = {
  name: 'Kamal',
  age: 22
};


//Example: a complex Objects
let complex: {data: number[], head: () => number} = {
  data: [1,2,3,4],
  head: function(): number {
    return this.data[0];
  }
}


//type alias
type Complex = {data: number[], head: () => number};

let complex2: Complex = {
  data: [10, 11, 12],
  head: function(): number {
    return this.data[0]
  }
}

//union types
let numberOrString: number | string;
numberOrString = 10;
numberOrString = 'Kamal'

//Check types
if (typeof numberOrString == 'string') {
  console.log('A string: ' + numberOrString)
} else {
  console.log(numberOrString);
}

//never
function neverReturns(): never {
  throw new Error('A failed computation');
}
