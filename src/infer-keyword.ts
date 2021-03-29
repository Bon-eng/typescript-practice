export {};
// 【ReturnType】関数の戻り値の型を返してくれるユーティリティ
function add (a: number, b: number) {
  return a + b;
}

console.log(add(1,2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// 【infer】条件を記載する部分に書ける特殊なキーワード
// 条件の一部としてジェネリクス型（<>の部分）を宣言できるようになる
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
  ) => infer R
   ? R
    : any;