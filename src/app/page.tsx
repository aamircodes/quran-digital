import Hero from './components/Hero';
import SurahList from './components/SurahList';

async function getData() {
  const res = await fetch('http://api.alquran.cloud/v1/surah');

  if (!res.ok) {
    throw new Error('Failed to fetch data from api');
  }

  return res.json();
}

export default async function Home() {
  const { data } = await getData();

  return (
    <main className=''>
      <Hero />
      <div className='container mx-auto'>
        <SurahList data={data} />
      </div>
    </main>
  );
}
