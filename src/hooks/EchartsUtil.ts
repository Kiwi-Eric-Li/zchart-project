import * as echarts from 'echarts/core';
import {
  BarChart,
  LineChart,
  PieChart,    
  RadarChart
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,  
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import type {
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,   
  RadarSeriesOption 
} from 'echarts/charts';
import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  LegendComponentOption  
} from 'echarts/components';
import type { ComposeOption } from 'echarts/core';

// ✅ 二、更新 Option 类型定义
type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | RadarSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
>;

// ✅ 三、注册新增的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,   
  BarChart,
  LineChart,
  PieChart,          
  RadarChart,        
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

export type { ECOption };

export default function EchartsUtil(chartRef: any, options: ECOption){

    const chart = echarts.init(chartRef.current);
    chart.setOption(options);
    return chart;
}