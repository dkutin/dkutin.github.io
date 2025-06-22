import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav
      style={{
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        marginBottom: '2rem',
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Link to='/'>Home</Link>
      <Link to='/blog/Something'>Something</Link>
    </nav>
  );
};

export default Nav;
