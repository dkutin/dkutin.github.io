import Logo from '@assets/logo.png';
import { FaSearch } from '@components/Icon';
import {
  Navbar as HeroUINavbar,
  Input,
  Link,
  NavbarBrand,
  NavbarContent,
  Tooltip,
} from '@heroui/react';

const Navbar = () => {
  return (
    <HeroUINavbar className='override' position={'sticky'} isBordered maxWidth={'xl'}>
      <NavbarContent>
        <NavbarBrand>
          <Link href='/' className='flex items-center gap-2'>
            <img src={Logo} width={50} height={50} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify={'end'}>
        <Tooltip content='Search is coming soon! (Needs more posts...)' placement='bottom' offset={10}>
          <div>
            <Input
              classNames={{
                base: 'max-w-full sm:max-w-[10rem] h-10',
                mainWrapper: 'h-full',
                input: 'text-small',
                inputWrapper:
                  'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
              }}
              placeholder='Search posts'
              startContent={<FaSearch />}
              size='sm'
              type='search'
              isDisabled
            />
          </div>
        </Tooltip>
      </NavbarContent>
    </HeroUINavbar>
  );
};

export default Navbar;
