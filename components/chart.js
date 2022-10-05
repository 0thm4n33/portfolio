import React from "react";
import {Box} from '@chakra-ui/react';
import dynamic from "next/dynamic";
import data from '../lib/data.json';
const ApexCharts = dynamic(()=> import('react-apexcharts'),{ssr:false});
export default class Chart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            output: '',
            series: [
                19,17,15,13,11
            ],
            options: {
                labels:[],
                legend:{
                    position:'right',
                    labels:{
                        colors:['#F6AD55','#FFFFFF']
                    }
                },
                yaxis:{
                    show:false
                },
                theme:{
                    mode:'light',
                    palette:'palette1',
                },
                tooltip:{
                    y:{
                        title:{
                            formatter:(title)=>{
                               return this.handleOnChange(title);
                            }
                        },
                        formatter:()=>{
                            return this.showData();
                        }
                    },
                }
            },
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.showData = this.showData.bind(this);
    }

    componentDidMount(){
        if(this.state.options.labels.length === 0){
            let labels = []
            data.skills.forEach(s=>{
               labels.push(s.name);
            })
            this.setState(prevState =>({
                options:{
                    ...prevState.options,
                    labels:labels
                }
            }))
        }
    }

    showData(){
        return this.state.output;
    }

    handleOnChange(title){
        data.skills.forEach((s)=>{
            if(s.name === title){
                this.setState({
                    output:s.values
                })
            }
        });
        return `${title}: <br />`;   
    }
    
    render(){
        return(
            <Box>
                <ApexCharts 
                    options={this.state.options} 
                    series={this.state.series} type="polarArea" 
                    width={"100%"}
                />
            </Box>
        )
    }
   
}
