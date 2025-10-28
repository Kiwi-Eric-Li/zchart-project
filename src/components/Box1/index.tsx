import {useRef, useEffect} from 'react'
// @ts-ignore
import { BorderBox1 } from '@jiaminghi/data-view-react';

import EchartsUtil from '../../hooks/EchartsUtil';
import type {ECOption} from '../../hooks/EchartsUtil';
import './index.css'

function Box1() {

    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        if(chartRef.current){

            const options: ECOption = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                    }
                ]
            };

            const chart = EchartsUtil(chartRef, options);

            return () => {
                chart.dispose();
            }
        }

    }, [])

    return (
        <div className='box1'>
            <BorderBox1>
                <div ref={chartRef} style={{'width': '100%', 'height': '100%'}}></div>
            </BorderBox1>
        </div>
    )
}

export default Box1;