export {};

let name = 'Pome';

name = 'ham';

let nickname = 'ham' as const;
nickname = 'ham';

//as constを記述するだけでreadonlyというプロパティを追加することができる
let profile = {
  name: 'Pome',
  height: 100
} as const;

// profile.name = 'ham';
// profile.height = 200;
