export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Pome', underTwenty: false };

// signaturesの書き方
// { [ index: typeForIndex ]: typeForValue }
// stringだけではない場合は「|」で区切って種類を追加
profile.name = 'Pome';
profile.age = 20;
profile.nationality = 'Japan';
