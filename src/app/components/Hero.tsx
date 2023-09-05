'use client';
export default function Hero() {
  return (
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
              />
            </div>
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
