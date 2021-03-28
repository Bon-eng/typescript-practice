export {};
// 同じような内容のデータを繰り返し表示させる時に使える形式
// Record<K, T> 
// 二つの引数を受け取ることができ、Kにはunion型を設定

type Prefectures = 'Tokyo' | 'Chiba' | 'Nagano' | 'Niigata';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
}

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 100 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 50 },
  Nagano: { kanji_name: '長野', confirmed_cases: 10 },
  Niigata: { kanji_name: '新潟', confirmed_cases: 10 }
}