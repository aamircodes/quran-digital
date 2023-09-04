export type surahProps = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
};

export default function Surah({
  number,
  name,
  englishName,
  englishNameTranslation,
  numberOfAyahs,
  revelationType,
}: surahProps) {
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{number}</p>
        <p>{englishName}</p>
        <p>{englishNameTranslation}</p>
        <p>{numberOfAyahs}</p>
        <p>{revelationType}</p>
      </div>
    </div>
  );
}
