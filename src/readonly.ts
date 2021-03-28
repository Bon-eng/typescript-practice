export {};
//readonlyの場合はpublicやprotectedを記述する必要がないが、自明ではないのであえて省略せずにpublicを記述するほうが良い。readonlyが消えたらpublicがないとコンパイルエラーになる
class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('ポメ');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ポメの集い'
