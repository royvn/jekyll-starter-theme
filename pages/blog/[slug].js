import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Markdown from '../../components/Markdown';
import Layout from '../../components/Layout';

export default function Post ({post}) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return (
      <div>404</div>
    )
  }
  return (
    <Layout>
      {router.isFallback ? (
        <div>Loading..</div>
      ) : (
        <div>
          <Head>
            <title>{post.title}</title>
          </Head>
          <div className="bg-black pt-24">
            <div className="container mx-auto px-6 lg:px-16">
            {/* min-h-screen-3/4 */}
              <div className={`grid grid-cols-12 md:gap-6  text-white items-end md:items-center`}>
                <div className={`col-span-12 md:col-span-10 lg:col-span-8`}>
                  <header className="post-header pt-12 pb-24">
                    <Link href="/blog/" className="post-back-to-blog">
                      <a className="inline-block text-center px-6 py-3 mb-4 text-sm leading-6 font-semibold transition-all rounded-full bg-gray-800 text-white hover:bg-black hover:text-white">
                        Terug naar overzicht
                      </a>
                    </Link>
                    {post.title && 
                      <h1 className="block text-3xl md:text-5xl font-bold transition-all">
                        {post.title}
                      </h1>
                    }
                    {post.date && post.author &&
                      <p className="post-meta">
                        Geplaatst op {post.date} door {post.author}.
                      </p>
                    }
                    {post.tags && 
                      <p className="flex flex-wrap space-x-3 mt-4">
                        {post.tags.map((tag) => (
                          <span className="block text-xs px-3 py-2 font-semibold rounded-full bg-gray-800 text-white" key={tag}>
                            #{tag}
                          </span>
                        ))}
                      </p>
                    }
                  </header>
                </div>
              </div>
            </div>
          </div>
          {post.image && 
            <div className="post-image">
              <div className="container mx-auto px-6 lg:px-16">
                <div className={`grid grid-cols-12 md:gap-6`}>
                  <div className={`col-span-12 -mt-12`}>
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={1200}
                      height={600} />
                  </div>
                </div>
              </div>
            </div>
          }
          <div className="post-content">
            <div className="container mx-auto px-6 lg:px-16">
              <div className={`grid grid-cols-12 md:gap-6`}>
                <div className="col-span-12 md:col-span-10 lg:col-span-8 lg:col-start-3 mt-12 mb-12">
                  <Markdown content={post.content}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  console.log('checkpoint getStaticProps');
  const post = getPostBySlug(params.slug, [
    'date',
    'title',
    'tags',
    'slug',
    'author',
    'content',
    'image',
  ]);
  // console.log('post');
  // console.log(post);
  const content = await markdownToHtml(post.content || '');
  // console.log('content');
  // console.log(content);
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  console.log('checkpoint getStaticPaths');
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}