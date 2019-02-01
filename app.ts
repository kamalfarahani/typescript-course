function id<T>(data: T): T {
  return data;
}

console.log(id<string>('salam'));

//Build in generics
const nums: Array<number> = [1,2,3,4];

function printAll<T>(args: T[]): void {
  args.forEach((arg) => console.log(arg));
}

printAll<number>([1,2,3,4]);
printAll<string>(['salam', 'bye']);

const id2 : <T> (data: T) => T = id;

//Generic class
class SimpleMath<T extends number | string, U extends number> {

  constructor(public baseValue: T, public mulValue: U){}

  mul(): number {
    return +this.baseValue * this.mulValue;
  }
}

const val: number | string = '10';

const sMath = new SimpleMath<number | string, number>(val, 12);
console.log(sMath.mul());
