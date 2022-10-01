import { Info } from "./info";

export default function CustomizedInfo({infos}){
    console.log(infos.length)
    const constructedInfo = infos.map((info,index)=> (
        index === infos.length - 1 ? 
        <Info key={info+index}>{`${info}.`}</Info> :
        <Info key={info+index}>{`${info},`}</Info>  
    ))
    return(
        <span>{constructedInfo}</span>
    )
}