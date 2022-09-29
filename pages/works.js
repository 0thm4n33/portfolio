import {Container,Heading,SimpleGrid} from '@chakra-ui/react';
import { GridItem } from '../components/grid-item';
import Section from '../components/section';
import data from '../lib/data.json';
export default function Works(){
    return(
        <Container mb={4}>
            <Heading as='h3' fontSize='20' mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                {data.works.map((work)=>(
                    <Section key={work.id} delay={work.delay}>
                        <GridItem
                            id={work.id}
                            title={work.title} 
                            imageLink={require(`../public/images/${work.image}`)}
                        >
                            {work.subtitle}
                        </GridItem>
                    </Section> 
                ))}
            </SimpleGrid>
        </Container>
    )
}