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

        <article className="post section section--margin">
          <Head>
            <title>{post.title}</title>
          </Head>
          <div className="container page-spacer">

            <header className="post-header">
              <div className="row">
                <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                  <Link href="/blog/" className="post-back-to-blog">
                    <a>
                      Terug naar overzicht
                    </a>
                  </Link>
                  {post.title && 
                    <h1 className="post-title">
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

          </div>

        </article>

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