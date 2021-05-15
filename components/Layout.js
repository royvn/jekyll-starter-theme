import Header from './Header';
import Footer from './Footer';

export default function Layout ({children}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <a href="#content" className="sr-only">
        Skip naar content
      </a>
      <Header />
      <main className="flex-grow" id="content">
        {children}
      </main>
      <Footer />
    </div>
  );
}