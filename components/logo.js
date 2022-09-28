import { Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weigth: bold;
  display: inline-flex;
  font-size: 18px;
  padding: 10px;
  height: 30px;
  inline-height: 20px;
  align-items: center;

  img {
    transition: 200ms ease;
    transform: rotate(60deg);
  }

  &:hover img {
    transform: rotate(0deg);
  }
`;

const Logo = () => {
  const logo = `/images/glasses.svg`;
  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <Image src={logo} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight={'bold'}
            ml={1}
          >
            Othmane Es-saidi
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
