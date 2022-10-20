import { useRouter } from "next/router";
import React from "react";
import WorkTemplate from "../../components/layouts/workTemplate";
export default function GymFitnessPage(){
    const { asPath } = useRouter();
    const workId = asPath.split('/')[2];
    return(
        <WorkTemplate 
            id={workId}
            items={['Plateform','Github']}
        />
    )
}