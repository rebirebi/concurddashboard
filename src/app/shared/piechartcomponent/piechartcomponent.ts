import { Component, computed, effect, OnInit, signal, inject } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { TaskStore } from '../../core/task.store';
import { ChartService } from '../../core/chart-service';
import { TaskResponse } from '../TaskResponse';



@Component({
  selector: 'app-piechartcomponent',
  imports: [BaseChartDirective],
  templateUrl: './piechartcomponent.html',
  styleUrls: ['./piechartcomponent.css'],
})
export class Piechartcomponent{

  private taskStore = inject(TaskStore);
  protected chartService = inject(ChartService);
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ChartDataLabels];

  // Get the pie chart data based on the current tasks
  public taskDataSignal = computed<TaskResponse[]>(() => {
    const storedTasks = this.taskStore.filteredTasks();
    return storedTasks.reduce((acc, currentItem) => {
      const existing = acc.find(item => item.category === (currentItem.completed ? 'Completed' : 'Pending'));
      if (existing) {
        existing.value += 1;
      } else {
        acc.push({
          category: currentItem.completed ? 'Completed' : 'Pending',
          value: 1,
        });
      }
      return acc;
    }, [] as TaskResponse[]);
  });
  //check whether there is data to show in the pie chart
  public hasData = computed(() => this.taskDataSignal().length > 0);

  // Compute the pie chart data using the ChartService using computed signal to ensure it updates reactively when taskDataSignal changes
  public pieChartData = computed<ChartData<'pie', number[], string>>(() => {
     return this.chartService.getPieChartData(this.taskDataSignal);
  });
  //pie chart options
  public pieChartOptions = this.chartService.getPieChartOptions();

}
