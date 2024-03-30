import { Component, ViewChild, Input, OnInit,OnChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit{
  @Input() barData: any;

  public barChartData: ChartData<'bar'> = {
    datasets: [],
    labels: [],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType = 'bar' as const;



  ngOnInit(): void {
    this.barChartData.datasets = this.barData.datasets;
    this.barChartData.labels = this.barData.labels;
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;
}
