import { Heading, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";

export default function LanguageButton(){
    const [language,setLanguage] = useState('EN');

    const chnageLanguage = (event)=>{
        const target = event.target;
        const value = target.innerText === 'EN' ? 'FR' : 'EN';
        setLanguage(value)
    }

    return(
        <IconButton
            sx={{border:'1px solid black'}}
            onClick={chnageLanguage}
            >
                <Heading as='h6' size='xs'>{language}</Heading>
        </IconButton>
    )
}