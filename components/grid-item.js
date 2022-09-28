import {Box,Text,LinkBox,LinkOverlay} from '@chakra-ui/react';
import Image from 'next/image';

export const GridItem = ({children,id,title,imageLink})=>(
    <Box w="100%" align="center">
        <LinkBox cursor={'pointer'}>
            <Image 
                src={imageLink} 
                alt={title}
                loading='lazy'
                placeholder='blur'
                style={imageStyle} 
            />
            <LinkOverlay href={`/works/${id}`}>
                <Text fontSize={20} mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const imageStyle = {
    borderRadius:'12px'
}