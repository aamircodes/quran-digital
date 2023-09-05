import { SurahProps } from './components/Surah';
import SurahList from './components/SurahList';

async function fetchAllSurah(): Promise<SurahProps[]> {
  'use server';

  try {
    const response = await fetch('http://api.alquran.cloud/v1/surah');
    if (!response.ok) {
      throw new Error('Failed to fetch data from API');
    }
    const responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    throw new Error('An error occurred');
  }
}

export default async function Home() {
  const data = await fetchAllSurah();

  return (
    <main>
      <div className='container mx-auto'>
        <SurahList data={data} />
      </div>
    </main>
  );
}
