export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number
}

// 【pick】必要なものを記述していって追加していく型
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// 【omit】(除外する)pickとは反対にいらないものを選択していき、除外していく型
type SmallProfile = Omit<DetailedProfile, 'height'>;

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;

type MySmallProfile = MyOmit;