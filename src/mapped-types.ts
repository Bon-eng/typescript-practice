export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

// in keyofという書き方はmappedタイプと呼ぶ
type Optional<T> = {[P in keyof T]?: T[P] | null };
type OptionalProfile = Optional<Profile>;