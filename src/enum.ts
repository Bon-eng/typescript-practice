export {};
//enum型は要素に対して添字の番号を自動的に付与してくれる
//先頭の数値を1と指定することで残りは勝手にずれていってくれる

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.Jun);
console.log(Months.December);

//JavaScriptで記述する場合は一つずつ番号を振らなければいけない
const MonthsJS = {
  January: 0,
  February: 1
};

console.log(MonthsJS.January);
console.log(MonthsJS.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#0080000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

//必要になった時に再宣言することもできる
enum COLORS {
  YELLOW = '#FF0000',
  GRAY = '#808080'
}

COLORS.YELLOW;