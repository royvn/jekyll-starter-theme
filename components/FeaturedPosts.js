import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedPosts.module.scss';

export default function FeaturedPosts ({allPosts}) {
	return (
    <section className={`section`}>

      <div className={`container page-spacer`}>
        <div className={`${styles.test}`}>
          <div className="">
            <h2 className="h1">Mijn design &amp; development notities</h2>
          </div>
          <div className="">
            <p>
              Op mijn blog schrijf ik over design &amp; development gerelateerde zaken. Van een tutorial tot een korte notitie of een oplossing voor een probleem, je leest het hier.
            </p>
            <Link href={`/blog`}>
              <a className="button button--primary">
                Naar blog
              </a>
            </Link>
          </div>
        </div>
        <ul className={styles.grid}>
          {allPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  {post.image && 
                    <div className="post-image">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        width={600}
                        height={300} />
                    </div>
                  }
                  <h3>
                    {post.title}
                  </h3>
                  {post.date &&
                    <p>
                      {post.date}
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
      </div>
    </section>
	);
}