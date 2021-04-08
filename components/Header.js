import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header () {
  return(
    <header className={styles.wrapper}>
      <div className={`${styles.container} page-spacer`}>
        <ul>
          <li className={styles.title}>
            <Link href="/">
              <a>
                Roy van Neden
              </a>
            </Link>
          </li>
          <li>
            <Link href="/info">
              <a>Info</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li> */}
        </ul>
      </div> 
    </header>
  );
}