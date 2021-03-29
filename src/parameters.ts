export {};
// 【parameters】関数が受け取る引数と同じ構造の型を取り扱う時に使うユーティリティ
const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
}

debugProfile('Pome', 20);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;