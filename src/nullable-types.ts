export {};
//nullableにしたい場合にはunion型にして、局所型に対応するようにすること。tsconfigのファイルはいじらない
let profile: { name: string; age: number | null } = {
  name: 'Pome',
  age: null
};
