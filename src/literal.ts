export {};
//literal型は指定することで絞り込むことができる
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
dayOfTheWeek = '31';

//number型の中に1~12を設定して絞り込み
let month: | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
month = 13;

//booleanの中にさらにtrueのみを絞り込み
let TRUE: true = true;
TRUE = false