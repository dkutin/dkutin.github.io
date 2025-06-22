import Nav from '@components/Nav';
import Blog from '@pages/Blog';
import Home from '@pages/Home.mdx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// MDX components to be shared across all MDX files
const components = {
  h1(properties: any) {
    return <h1 className='text-5xl' {...properties} />;
  },
  em(properties: any) {
    return <i {...properties} />;
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <main className='light text-foreground bg-background'>
        <Nav />
        <section className='container px-12 pt-8'>
          <Routes>
            <Route path='/' element={<Home components={components} />} />
            <Route path='/blog/:slug' element={<Blog components={components} />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
