import * as echarts from 'echarts';

export default function EchartsUtil(chartRef: any, options: any){

    const chart = echarts.init(chartRef.current);
    chart.setOption(options);
    return chart;
}