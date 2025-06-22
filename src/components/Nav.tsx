import Logo from '@assets/logo.png';
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';

const Nav = () => {
  return (
    <Navbar position={'static'} isBordered>
      <NavbarContent>
        <NavbarBrand>
          <img src={Logo} width={50} height={50} />
        </NavbarBrand>
        <NavbarItem>
          <Link href='/' aria-current='page'>
            <Button variant='light'>Home</Button>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='/blog'>
            <Button variant='light'>Blog</Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
