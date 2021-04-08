import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import { getAllPosts } from '../lib/api';


export default function Home({allPosts}) {
  return (
    <Layout>
      <Head>
        <title>Roy van Neden</title>
      </Head>
      <h1>Roy van Neden</h1>
      <p>Front-end developer, Shopify theme developer &amp; digital designer</p>
      <p>
        Slider met titel en link erboven naar alle
      </p>

      <FeaturedPosts allPosts={allPosts}/>
      <Hero image="/hero.jpg" subtitle="Epic" title="Hero component" paragraph="hello world" />
      <h2>Work</h2>

    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'title',
    'description',
    'image',
    'date',
    'tags',
    'author',
  ]);
  return {
    props: { allPosts },
  }
}