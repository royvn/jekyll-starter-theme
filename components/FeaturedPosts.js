import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedPosts ({allPosts}) {
	return (
    <ul className={`grid grid-cols-12 gap-6`}>
        {allPosts.map((post) => (
          <li className="col-span-12 md:col-span-4" key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a className="block border rounded-lg overflow-hidden">
                {post.image && 
                  <div className="block">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={600}
                      height={300} />
                  </div>
                }
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">
                    {post.title}
                  </h3>
                  {post.date &&
                    <p className="text-xs mb-2">
                      {post.date}
                    </p>
                  }
                  {post.description &&
                    <p className="text-sm">
                      {post.description}
                    </p>
                  }
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
	);
}