import Notice from './Notice';
import Header from './Header';
import Footer from './Footer';

import styles from './Layout.module.scss';

export default function Layout ({children}) {
  return (
    <div className={styles.wrapper}>
      <a href="#content" className="visually-hidden">Skip naar content</a>
      {/* <Notice title="Nieuw op blog: Verbeter de weergave van je productinformatie in Shopify" link="/blog/2020-08-01-verbeter-de-weergave-van-je-productinformatie-met-een-section-in-shopify" /> */}
      <Header />
      <main className="main" id="content">
        {children}
      </main>
      <Footer />
    </div>
  );
}