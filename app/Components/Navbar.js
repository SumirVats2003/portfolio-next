import Link from 'next/link';
import styles from '../styles/nav.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link href=''>About</Link>
        </li>
        <li>
          <Link href=''>Contact</Link>
        </li>
        <li>
          <Link href=''>Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}
