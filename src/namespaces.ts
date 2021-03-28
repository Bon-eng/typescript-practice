export {};
//namespaceというメソッドを利用してファイル名が同じでもフォルダを分ければ保存できる
//exportを使用することで外からのアクセスが可能になる
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string){
      }
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string){
      }
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
      ) {}
  }
}

const me = new Japanese.Tokyo.Person('Pome');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('PomeYan');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);