import { useRouter } from "next/router";
import React from "react";
import WorkTemplate from "../../components/layouts/workTemplate";
import data from '../../lib/data.json'

export default function SpeedyDrive(){
    const { asPath } = useRouter();
    const pathWork = asPath.split('/')[2];
    const work = data.works.find( w => w.id === pathWork);
    return(
        <WorkTemplate 
            work={work}
        />
    )
}