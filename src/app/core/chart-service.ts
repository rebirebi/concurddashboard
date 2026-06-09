import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { TaskResponse } from '../shared/TaskResponse';

@Injectable({
  providedIn: 'root',
})
export class ChartService {

  //get pie chart options
   public getPieChartOptions = () => {
      var pieChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        datalabels: {
          color: '#ffffff',
          font: { weight: 'bold', size: 14 },
          formatter: (value: number, ctx: any) => {
            const dataset = ctx.chart.data.datasets;
            const dataArr = (dataset[0].data as number[]) || [];
            const total = dataArr.reduce((acc: number, cur: number) => acc + (Number(cur) || 0), 0);
            if (!total) return '0%';
            return `${((Number(value) / total) * 100).toFixed(1)}%`;
          }
        }
      }
    };
    return pieChartOptions;
   }
  
  //get pie chart data based on the current tasks
  public getPieChartData =  (data: () => any[]) => {
      const currentData = data();
      return {
        labels: currentData.filter(item => item.category).map(item => item.category),
        datasets: [
          {
            data: currentData.map(item => item.value),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          }
        ]
      };
}
}
