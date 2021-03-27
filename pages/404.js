import Head from 'next/head';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Pagina niet gevonden</title>
      </Head>
      <h1>Pagina niet gevonden</h1>
    </Layout>
  );
}