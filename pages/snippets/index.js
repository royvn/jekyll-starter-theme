import Head from 'next/head';
import Layout from '../../components/Layout';
import Intro from '../../components/Intro';

export default function Snippets () {
  return (
    <Layout>
      <Head>
        <title>Snippets</title>
      </Head>
      <Intro title="Snippets" paragraph="Beknopt en copy paste ready voor gebruik." />
      <div className="container mx-auto my-24 px-8 lg:px-16">

      </div>
    </Layout>
  );
}