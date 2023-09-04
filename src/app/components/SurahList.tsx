import { Key } from 'react';
import Surah, { surahProps } from './Surah';

export default function SurahList({ data }: any) {
  return (
    <div className='grid grid-cols-1 gap-4 mt-4 px-3 sm:grid-cols-2 sm:gap-4  xl:grid-cols-3 lg:gap-4'>
      {data.map((a: surahProps, index: Key | null | undefined) => {
        return (
          <Surah
            key={index}
            name={a.name}
            number={a.number}
            englishName={a.englishName}
            englishNameTranslation={a.englishNameTranslation}
            numberOfAyahs={a.numberOfAyahs}
            revelationType={a.revelationType}
          />
        );
      })}
    </div>
  );
}
