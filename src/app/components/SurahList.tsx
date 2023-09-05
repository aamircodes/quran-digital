'use client';

import { Key, useState } from 'react';
import Surah, { SurahProps } from './Surah';

export default function SurahList({ data }: { data: SurahProps[] }) {
  const [query, setQuery] = useState('');

  function searchFilter(array: SurahProps[]) {
    return array.filter((item: SurahProps) =>
      item.englishName.toLowerCase().includes(query)
    );
  }

  const filtered = searchFilter(data);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <div className='hero h-full bg-base-300'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>Quran App</h1>
            <p className='py-6'>Enter your surah</p>
            <div className='form-control'>
              <div className='input-group'>
                <input
                  type='text'
                  placeholder='Search…'
                  className='input input-bordered'
                  onChange={handleChange}
                />
              </div>
            </div>{' '}
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
