import {Container, Box, List, ListItem, Link} from '@chakra-ui/react';
import { Info } from '../../components/info';
import Paragraph from '../../components/paragraph';
import { Meta, Title, WorkImage } from '../../components/work';
import {ExternalLinkIcon} from '@chakra-ui/icons';
import data from '../../lib/data.json';
import Section from '../../components/section';
import CustomizedInfo from '../../components/customized-info';
export default function BlogWork(){
    const blog = data.works.find(w => w.id === 'blog');
    return(
        <Container mt={2}>
           <Title title={blog.title} year={blog.year} />
           <Paragraph>
                {blog.description}
           </Paragraph>
           <List mt={3} ml={5}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <CustomizedInfo 
                        infos={blog.plateform}
                    />
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <CustomizedInfo infos={blog.stack} />
                </ListItem>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href={blog.github}>
                        {blog.github} <ExternalLinkIcon/>
                    </Link>
                </ListItem>
           </List>
           <Box mt={3}>
            {blog.images.map((imageUrl,index) =>(
                    <Section 
                        key={`${blog.title}_${index}`}
                        delay={0.1}
                    >
                        <WorkImage 
                            alt={`preview_${index}`} 
                            src={require(`../../public/images/blog/${imageUrl}`)}
                        />
                    </Section>
            ))}
           </Box>
        </Container>
    )
}