import { useRouter } from "next/router";
import WorkTemplate from "../../components/layouts/workTemplate";
export default function ChuWork(){
    const { asPath } = useRouter();
    const workId = asPath.split('/')[2];
    return(
        <WorkTemplate 
            id={workId} 
            items={['Plateform','Github']} 
        />
    )
}