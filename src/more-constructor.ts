export {};
//constructorメソッドの引数にアクセス修飾子を記述することで、自動で初期化処理をしてくれる
class Person {
  constructor(public name: string, protected age: number) {
  }
}

const me = new Person('ポメ', 20);
console.log(me);
