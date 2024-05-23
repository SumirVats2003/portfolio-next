import Image from 'next/image';
import profile from './assets/sumir.png';
import Navbar from './Components/Navbar';
import styles from './styles/page.module.css';
import Button from './Components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className={styles.main_content}>
        <Navbar />
        <div className={styles.hero_content}>
          <div className={styles.image}>
            <Image
              src={profile}
              alt='Picture of the author'
              className={styles.picture}
              width={500}
              height={500}
              blurDataURL='data:...'
              placeholder='blur'
            />
          </div>

          <div className={styles.container}>
            <h1 className={styles.heading}>Sumir Vats</h1>
            <p className={styles.content}>
              Computer Engineering Undergraduate | Open Source Enthusiast | Web
              and App Developer | Music and Singing
            </p>
            <Link href=''>
              <Button text='Download Resume' />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
