import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { getAllPosts } from '../lib/api';


export default function Home({allPosts}) {
  return (
    <Layout>
      <Head>
        <title>Roy van Neden</title>
      </Head>
      <Hero image="/hero.jpg" title="Design &amp; front-end development" />
      <h1>Index</h1>
      <h2>Posts</h2>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>
                <h3>
                  {post.title}
                </h3>
                {post.date &&
                  <p>
                    {post.date} - {post.author}
                  </p>
                }
                {post.tags && 
                  <p>
                    {post.tags.map((tag) => (
                      <span key={tag}>
                        #{tag}
                      </span>
                    ))}
                  </p>
                }
                {post.description &&
                  <p>
                    {post.description}
                  </p>
                }
                <span>
                  Lees verder
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
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