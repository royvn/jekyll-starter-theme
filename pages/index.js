import Head from 'next/head';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import FeaturedPosts from '../components/FeaturedPosts';
import { getAllPosts } from '../lib/api';

const slides = [
  {
    title: 'Design & development',
    paragraph: 'Focus momenteel op Shopify / Ecommerce.',
    image: '/hero.jpg'
  },
  {
    title: 'Slide 2',
    paragraph: 'Paragraph here yo',
    image: '/hero.jpg'
  },
  {
    title: 'Slide 3',
    paragraph: 'Paragraph here yo',
    image: '/hero.jpg'
  }
];

export default function Home({allPosts}) {
  return (
    <Layout>
      <Head>
        <title>Roy van Neden</title>
      </Head>
      <div className={`section section--margin`}>
        <h1>Roy van Neden</h1>
        <p>Front-end developer, Shopify theme developer &amp; digital designer</p>
      </div>
      <p>
        Slider met titel en link erboven naar alle
      </p>
      <Slider slides={slides}/>
      <FeaturedPosts allPosts={allPosts}/>
      <Hero image="/hero.jpg" subtitle="Epic" title="Hero component" paragraph="hello world" />
      <CallToAction image="/hero.jpg" title="Ik ontwikkel Shopify Themes bij CODE" paragraph="Ben je zoekende naar een Shopify (Plus) Expert? Neem dan een kijkje bij CODE - a Shopify Plus agency!" />

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