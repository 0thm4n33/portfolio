import { useRouter } from "next/router";
import WorkTemplate from "../../components/layouts/workTemplate";
import data from '../../lib/data.json';
export default function ChuWork(){
    const { asPath } = useRouter();
    const pathWork = asPath.split('/')[2];
    const work = data.works.find( w => w.id === pathWork);
    return(
        <WorkTemplate 
            work={work} 
            items={['Plateform','Github']} 
        />
    )
}