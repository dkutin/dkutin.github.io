import Nav from '@components/Nav';
import Blog from '@pages/Blog';
import Home from '@pages/Home.mdx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// MDX components to be shared across all MDX files
const components = {
  em(properties: any) {
    return <i {...properties} />;
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main style={{ padding: '0 2rem' }}>
        <Routes>
          <Route path='/' element={<Home components={components} />} />
          <Route path='/blog/:slug' element={<Blog components={components} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
