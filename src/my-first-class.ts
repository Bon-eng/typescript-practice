export {};
//constructorの戻り値には型を指定してはいけないルールになっている(引数には必要)
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile (): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Person();
