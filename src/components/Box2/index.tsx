import {useRef, useEffect} from 'react'
// @ts-ignore
import { BorderBox1 } from '@jiaminghi/data-view-react';

import EchartsUtil from '../../hooks/EchartsUtil';
import type {ECOption} from '../../hooks/EchartsUtil';
import './index.css'

function Box2() {

    const chartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        if(chartRef.current){
            const options: ECOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true,
                        }
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                    },
                ],
                series: [
                    {
                        name: 'Direct',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220],
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
        <div className='box2'>
            <BorderBox1>
                <div ref={chartRef} style={{'width': '100%', 'height': '100%'}}></div>
            </BorderBox1>
        </div>
    )
}

export default Box2;