export {};
// 【ConstructorParameters】
class Person {
  name: string;
  age: number;

  constructor(name:string, age: number) {
  this.name = name;
  this.age = age;
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Pome', 20];
const pome = new Person(...profile);
console.log(pome);

type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
