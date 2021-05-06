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
          <div className="container mx-auto my-12 md:my-24 px-8 lg:px-16">
            <div className={`grid grid-cols-12 gap-6`}>
              <div className={`col-span-12 lg:col-span-9`}>
            
                <article>
                  <header className="post-header">
                    <div className="">
                      <div className="">
                        <Link href="/blog/" className="post-back-to-blog">
                          <a>
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
                              <span className="block text-xs px-3 py-2 font-semibold rounded bg-gray-300" key={tag}>
                                #{tag}
                              </span>
                            ))}
                          </p>
                        }
                      </div>
                    </div>
                  </header>

                  {post.image && 
                    <div className="post-image">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={1200}
                        height={600} />
                    </div>
                  }

                  <div className="post-content">
                    <Markdown content={post.content} />
                  </div>
                </article>

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
    'title',
    'date',
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