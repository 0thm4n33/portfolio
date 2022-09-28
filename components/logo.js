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
`;

const Logo = () => {
  const logo = useColorModeValue('/images/js-black.png','/images/js-white.png');
  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <Image src={logo} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontWeight={'bold'}
          >
            Othmane Es-saidi
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
