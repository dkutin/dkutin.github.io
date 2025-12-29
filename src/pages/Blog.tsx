import React, { Suspense, lazy } from 'react';

import { Link, Spinner } from '@heroui/react';
import { useParams } from 'react-router-dom';

import posts from '@/blog';

const Blog: React.FC = ({ ...props }) => {
  const { slug } = useParams<{ slug: string }>();
  const PostContent =
    posts.find((post) => post.slug === slug)?.component ||
    lazy(() => import('@/pages/NotFound.mdx'));

  return (
    <Suspense fallback={<Spinner size={'lg'} />}>
      <Link href={'/'} className='text-blue-500 hover:underline mb-4 inline-block'>
        &larr; Back to Home
      </Link>
      <article className='prose max-w-4xl pb-20'>
        <PostContent {...props} />
      </article>
    </Suspense>
  );
};

export default Blog;
