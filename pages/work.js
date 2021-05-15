import Head from 'next/head';
import Layout from '../components/Layout';
import Intro from '../components/Intro';

export default function Work () {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>
      <Intro title="Work"/>
      <p>
        Idee list met videos en images van gemaakt werk.
      </p>
    </Layout>
  );
}