'use client';

import { Key, useState } from 'react';
import Surah, { SurahProps } from './Surah';
import Image from 'next/image';

export default function SurahList({ data }: { data: SurahProps[] }) {
  const [query, setQuery] = useState('');

  function searchFilter(array: SurahProps[]) {
    return array.filter((item: SurahProps) =>
      item.englishName.toLowerCase().includes(query.toLowerCase())
    );
  }

  const filtered = searchFilter(data);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <div className='hero border-2 border-black bg-accent p-4'>
        <div className='hero-content text-center'>
          <div className='flex flex-col gap-4'>
            <Image src='/calligraphy.svg' width={300} height={100} alt='hero' />
            <input
              type='text'
              placeholder='Search for a surah...'
              className='input input-bordered'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-4 mt-4 px-3 sm:grid-cols-2 sm:gap-4  xl:grid-cols-3 lg:gap-4'>
        {filtered.map((a: SurahProps, index: Key | null | undefined) => {
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
    </div>
  );
}
