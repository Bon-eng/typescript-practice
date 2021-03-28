export {};

let name: any = 'Pome';

//記述方法は3タイプ
let length = name.length as number;
let length = (name as string).length;
//⬇️はReactの記法であるJSXと似ているため、記述の場合はasを使うようにすること
let length = (<string>name).length;

// length = 'woo';