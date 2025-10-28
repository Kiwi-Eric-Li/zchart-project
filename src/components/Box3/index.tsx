import {useRef, useEffect} from 'react'
// @ts-ignore
import { BorderBox1 } from '@jiaminghi/data-view-react';

import EchartsUtil from '../../hooks/EchartsUtil';
import type {ECOption} from '../../hooks/EchartsUtil';
import './index.css'

function Box3() {
    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        if(chartRef.current){

            const options: ECOption = {
                title: {
                    text: 'Basic Radar Chart',
                    textStyle: {
                        color: '#fff'
                    }
                },
                legend: {
                    data: ['Allocated Budget', 'Actual Spending'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                radar: {
                    // shape: 'circle',
                    indicator: [
                        { name: 'Sales', max: 6500, color: '#fff' },
                        { name: 'Administration', max: 16000, color: '#fff' },
                        { name: 'Information Technology', max: 30000, color: '#fff' },
                        { name: 'Customer Support', max: 38000, color: '#fff' },
                        { name: 'Development', max: 52000, color: '#fff' },
                        { name: 'Marketing', max: 25000, color: '#fff' },
                    ],
                },
                series: [
                    {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: 'Allocated Budget',
                            },
                            {
                                value: [5000, 14000, 28000, 26000, 42000, 21000],
                                name: 'Actual Spending',
                            },
                        ],
                    },
                ],
            };

            const chart = EchartsUtil(chartRef, options);

            return () => {
                chart.dispose();
            }
        }

    }, [])

    return (
        <div className='box3'>
            <BorderBox1>
                <div ref={chartRef} style={{'width': '100%', 'height': '100%'}}></div>
            </BorderBox1>
        </div>
    )
}

export default Box3;