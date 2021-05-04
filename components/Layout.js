import Notice from '../components/Notice';
import Header from './Header';
import Footer from './Footer';

export default function Layout ({children}) {
  return (
    <div className="relative">
      <a href="#content" className="sr-only">
        Skip naar content
      </a>
      <Notice 
        link_to="/blog/2020-08-01-verbeter-de-weergave-van-je-productinformatie-met-een-section-in-shopify" 
        link_text="Nieuw op blog: Verbeter de weergave van je productinformatie in Shopify" 
        />
      <Header />
      <main className="main" id="content">
        {children}
      </main>
      <Footer />
    </div>
  );
}