import Head from 'next/head';
import Link from 'next/link';
import Intro from '../components/Intro';
import Layout from '../components/Layout';
import Text from '../components/Text';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Pagina niet gevonden</title>
      </Head>
      <Text>
        <h1>
          Pagina niet gevonden
        </h1>
        <p>
          Probeer het opnieuw of keer terug naar home.
        </p>
        <Link href="/">
          <a className={`inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full bg-black text-white hover:bg-gray-700 hover:text-white`}>
            Terug naar home
          </a>
        </Link>
      </Text>
    </Layout>
  );
}