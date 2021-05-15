import Head from 'next/head';
import { getAllPosts } from '../../lib/api';
import Layout from '../../components/Layout';
import FeaturedPosts from '../../components/FeaturedPosts';
import Intro from '../../components/Intro';

export default function Blog ({allPosts}) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Intro title="Blog"/>
      <div className="container mx-auto my-24 px-8 lg:px-16">
        <FeaturedPosts allPosts={allPosts}/>
      </div>
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