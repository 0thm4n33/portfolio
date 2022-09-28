import { Container, Box, Heading, Text,Image,Button ,useColorModeValue } from '@chakra-ui/react';
import Paragraph from '../components/paragraph';
import NextLink from 'next/link';
import {ChevronRightIcon} from '@chakra-ui/icons';
import Section from '../components/section';
import { BioSection,BioYear } from '../components/bio';
import Chart from '../components/chart';
const Page = () => {
  return (
    <Container padding={2}>
      <Box 
            borderRadius={'md'} 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={'3'} 
            mb={6} 
            align={'center'}
        >
            Hello, I&apos;m a software engineer based in French!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant={'page-title'}>
            Othmane Es-saidi
          </Heading>
          <Text fontSize={'6xs'}>
            Full-stack developer with some basics on system administration and cloud comptuing.
        </Text>
        </Box>
        <Box 
            align='center' 
            ml={{md:6,base:0}} 
            mt={{base:4,md:0}} 
            flexShrink={0}
            >
            <Image 
                borderColor={useColorModeValue('blackAlpha.900','blue.400')}
                borderWidth={2}
                borderRadius={'full'}
                borderStyle='solid'
                display={'block'}
                alt='image profile' 
                maxWidth={'100px'} 
                src={'/images/profile_image.jpg'}
                />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
            Work
        </Heading>
        <Paragraph>
            Othmane is a 2nd year cybersecurity student at Lumière Lyon II University.
            A full-stack developer who loves and enjoys creating web and mobile appication from scratch.
            In free time I do sports and read books.
            I like to travel and meet new people.
        </Paragraph>
        <Box align='center' mt={3}>
            <NextLink href='/works'>
                <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>My portfolio</Button>
            </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
            Bio
        </Heading>
        <BioSection>
            <BioYear>2019</BioYear>
                Completed a Higher Technical Diploma in Networking and System Administration 
                at Office of Vocational Training and Work Promotion in Taza.
        </BioSection>
        <BioSection>
            <BioYear>2021</BioYear>
            Completed Bachelor Degree In Software engineering in School of Engineering in Applied 
            Sciences in Fez.
        </BioSection>
        <BioSection>
            <BioYear>2022 to present</BioYear>
            Master 2 in Organization And Protection Of Information Systems
        </BioSection>
      </Section>
      <Section delay={0.3}>
            <Heading as='h3' variant='section-title'>
                Skills
            </Heading>
            <Chart />
      </Section>
    </Container>
  );
};
export default Page;
