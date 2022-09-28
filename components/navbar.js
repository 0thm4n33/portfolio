import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5';
import NextLink from 'next/link';
import Logo from './logo';
import ToggleButton from './toggle-button';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  console.log(`active: ${active}`);
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href} passHref>
      <Link
        target={target}
        p={2}
        color={active ? '#202023' : inactiveColor}
        bg={active ? 'white' : undefined}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavBar = (props) => {
  const linkGithub = 'https://github.com/0thm4n33/';
  const { path } = props;
  console.log(`path: ${path}`);
  return (
    <Box
      position={'fixed'}
      as="nav"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      w={'100%'}
    >
      <Container
        display={'flex'}
        p={2}
        align={'center'}
        justifyContent={'space-between'}
        maxW={'container.md'}
        wrap={'wrap'}
      >
        <Flex align={'center'} mr={5}>
          <Heading
            as={'h1'}
            size={{ md: 'lg', base: 'sm' }}
            letterSpacing={'tighter'}
          >
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={'row'}
          display={{ base: 'none', md: 'flex' }}
          flexGrow={1}
          width={{ base: 'full', md: 'auto' }}
        >
          <LinkItem href={'/works'} path={path}>
            Works
          </LinkItem>
          <LinkItem
            path={path}
            href={linkGithub}
            display={'inline-flex'}
            alignItems={'center'}
            pl={2}
            css={{ gap: 4 }}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box display={'flex'} gap={1}>
          <ToggleButton />
          <Box display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                aria-label="Options"
                variant="outline"
              />
              <MenuList>
                {['Works', 'Source'].map((item) => (
                  <NextLink
                    key={item}
                    passHref
                    href={
                      item === 'Source' ? linkGithub : `/${item.toLowerCase()}`
                    }
                  >
                    <MenuItem>{item}</MenuItem>
                  </NextLink>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
