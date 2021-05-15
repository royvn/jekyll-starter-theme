import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Text from '../components/Text';
import Slider from '../components/Slider';
import FeaturedPosts from '../components/FeaturedPosts';
import Notice from '../components/Notice';
import CallToAction from '../components/CallToAction';

const slides = [
  {
    title: 'Design, develop, repeat',
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
      {/* <Slider slides={slides}/> */}
      <Hero 
        image="/hero.jpg" 
        title="Design Develop Repeat"
        primary_link_to="/blog"
        primary_link_text="Bekijk blog"
        primary_link_variant="button--light"
        secondary_link_to="/info"
        secondary_link_text="Meer informatie"
        secondary_link_variant="button--link"
        />
      {/* <Notice 
        link_to="/blog/2020-08-01-verbeter-de-weergave-van-je-productinformatie-met-een-section-in-shopify" 
        link_text="Nieuw op blog: Verbeter de weergave van je productinformatie in Shopify" 
        /> */}
      <Text>
        <h2>
          Front-end Developer in de omgeving van Den Haag
        </h2>
        <p>
          Met een focus op E-commerce, Shopify &amp; performance.
        </p>
        <Link href="/contact">
          <a className={`inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full bg-black text-white hover:bg-gray-700 hover:text-white`}>
            Bekijk werk
          </a>
        </Link>
      </Text>
      <div className="container mx-auto my-12 md:my-24 px-6 lg:px-16">
        <div className={`grid grid-cols-12 gap-6 mb-12 items-center`}>
          <div className={`col-span-12 md:col-span-6`}>
            <h2 className="text-center md:text-left">
              Laatst gepubliceerd op mijn blog
            </h2>
          </div>
          <div className={`col-span-12 md:col-span-6 text-center md:text-right`}>
            {/* <p className="text-base mb-4">
              Op mijn blog schrijf ik over design &amp; development gerelateerde zaken. Van een tutorial tot een korte notitie of een oplossing voor een probleem, je leest het hier 🙃.
            </p> */}
            <Link href={`/blog`}>
              <a className="inline-block text-center px-6 py-3 text-sm leading-6 font-semibold transition-all rounded-full bg-black text-white hover:bg-gray-700 hover:text-white">
                Naar blog
              </a>
            </Link>
          </div>
        </div>
        <FeaturedPosts allPosts={allPosts}/>
      </div>


      {/* <CallToAction image="/hero.jpg" title="Ik ontwikkel Shopify Themes bij CODE" paragraph="Ben je zoekende naar een Shopify (Plus) Expert? Neem dan een kijkje bij CODE - a Shopify Plus agency!" /> */}

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