import Image from 'next/image';
import profile from './assets/sumir.png';
import Navbar from './Components/Navbar';

export default function Home() {
  return (
    <main className='main-content'>
      <div className='image'>
        <Image
          src={profile}
          alt='Picture of the author'
          className='picture'
          width={500}
          height={500}
          blurDataURL='data:...'
          placeholder='blur'
        />
      </div>

      <div className='container'>
        <Navbar />
        <h1 className='heading'>Sumir Vats</h1>
        <p className='content'>
          Computer Engineering Undergraduate | Open Source Enthusiast | Web and
          App Developer | Music and Singing
        </p>
      </div>
    </main>
  );
}
