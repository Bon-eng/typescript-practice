export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Pome',
  age: 20
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Osyushi',
  age: 100
};

// friend.age++

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfle = YomitoriSenyo<Profile>;
