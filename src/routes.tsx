import Blog from '@pages/Blog';
import Home from '@pages/Home';
import { Route, Routes } from 'react-router-dom';

const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/blog/:slug' element={<Blog />} />
  </Routes>
);

export default Router;
