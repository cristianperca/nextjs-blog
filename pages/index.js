import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

function HomePage({ posts }) {
  console.log('[HomePage] render:', posts);
  const backendUrl = process.env.BACKEND_URL
  console.log('[HomePage] backendUrl:', backendUrl);
  
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              {/* <Link href={`/posts/${post.slug}`}> */}
              {/* <Link href="/posts/[slug]" as={`process.env.BACKEND_URL/posts/${post.slug}`}> */}
              <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
