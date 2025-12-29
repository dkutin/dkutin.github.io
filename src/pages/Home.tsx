import { Card, CardBody, CardFooter, CardHeader, Chip, Divider, Link } from '@heroui/react';

import posts from '@/blog';

const Home = () => {
  return (
    <>
      <h1 className='text-4xl font-bold mb-4'>Latest</h1>
      <section className='flex flex-row flex-wrap gap-4'>
        {posts.map(({ slug, title, description, tags, date }) => (
          <Card as='article' className={'min-w-[340px] md:max-w-[340px] w-full'} key={slug}>
            <CardHeader>
              <div>
                <h3 className={'text-xl'}>{title}</h3>
                <span className='text-gray-400'>{date}</span>
                <div className='flex items-center justify-betweeen gap-1 mt-2'>
                  {tags.map((tag) => (
                    <Chip size={'sm'} key={tag} color={'primary'}>
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <p className='text-gray-700'>{description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <div className='flex justify-end w-full'>
                <Link href={`/blog/${slug}`}>Read &rarr;</Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
};

export default Home;
