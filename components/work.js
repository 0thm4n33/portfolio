import NextLink from 'next/link';
import {Box,Badge,Link,Heading} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { imageStyle } from './grid-item';

export const Title = ({title,year})=>(
    <Box>
        <NextLink href={'/works'} passHref>
            <Link>Works</Link>
        </NextLink>
        <span>
            {' '}
            <ChevronRightIcon /> 
            {' '}
        </span>
        <Heading as='h3' display='inline-block' fontSize={20} mb={7}>
            {title}
            <Badge ml={1}>
                {year}
            </Badge>
        </Heading>
    </Box>
)

export const Meta = ({children})=>(
    <Badge m={1} colorScheme='green'>{children}</Badge>
)

export const WorkImage = ({alt,src})=>(
    <Image alt={alt} src={src} style={imageStyle}/>
)