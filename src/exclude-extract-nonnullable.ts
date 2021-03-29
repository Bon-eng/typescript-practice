export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Excludeで記述したものは除外することができる
// 1番目の引数には全体のunion型・2番目の引数には不要な物だけで構成されるunion型を指定する
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;

// Functionは関数の型の総称・全ての関数の型を除外したいときに使う
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extractは指定したものだけど取り出すことができる
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NunFunctionTypeByExtract = Extract<SomeTypes, string | number>;

// Functionを指定することでSomeTypesの中から関数だけを抜き取ることができる
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// nullableはunion型からnullやundefinedを排除してくれる
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
