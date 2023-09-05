import Hero from './components/Hero';
import SurahList from './components/SurahList';

export default function Home() {
  return (
    <main>
      <div className='container mx-auto'>
        <Hero />
        {/* @ts-expect-error Async Server Component */}
        <SurahList />
      </div>
    </main>
  );
}
