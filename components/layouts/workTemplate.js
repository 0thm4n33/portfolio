import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Container, Link, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { Info } from "../info";
import Paragraph from "../paragraph";
import Section from "../section";
import { Meta, Title, WorkImage } from "../work";

export default function WorkTemplate({work}){
    return(
        <Container mt={2}>
            <Title title={work.title} year={work.year} />
            <Paragraph>{work.description}</Paragraph>
            <List>
                {['Plateform','Github','Website'].map(entry => (
                    <ListItem key={entry}>
                        <Meta>{entry}</Meta>
                        {
                            entry === "Plateform" ?
                                <Info key={entry}>
                                    {work[entry.toLowerCase()]}
                                </Info> :
                                <Link href={work[entry.toLowerCase()]}>
                                    {work[entry.toLowerCase()]} <ExternalLinkIcon />
                                </Link>
                        }
                    </ListItem>
                ))}
                <ListItem>
                    <Meta>Stack</Meta>
                    {work.stack.map((s,index) => (
                        <Info key={s}>
                            {`${s} ${index === work.stack.length - 1 ? '.' : ','}`}
                        </Info>
                    ))}
                </ListItem>
            </List>
            <Box mt={3}>
                <Section delay={0.2}>
                     {work.images.map(image =>(
                        <WorkImage 
                            key={work.title} 
                            alt={work.title} 
                            src={require(`../../public/images/${work.id}/${image}`)}
                        />
                     ))}
                </Section>
            </Box>
        </Container>
    )
}