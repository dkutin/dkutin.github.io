import { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

const Blog = ({ ...props }) => {
  const { slug } = useParams<{ slug: string }>();
  const PostContent = lazy(() => import(`/src/blog/${slug}.mdx`));

  return (
    <Suspense fallback={<div>Loading post...</div>}>
      <PostContent {...props} />
    </Suspense>
  );
};

export default Blog;
