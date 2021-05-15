import Link from 'next/link';

export default function ListLatestPosts (props) {
  if(props.posts.length > 0) {
    return (
      <ul>
        {props.posts.slice(0, 4).map(post =>(
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>
                {post.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  } else {
    return;
  }
}