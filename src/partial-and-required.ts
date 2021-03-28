export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// 全てを一括でオプショナル(必須でない)にしてくれる
type PartialType = Partial<Profile>
// ?を剥がして全て必須にしてくれる
type RequiredType = Required<Profile>