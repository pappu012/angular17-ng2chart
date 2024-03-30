import { Component, ViewChild, Input, OnInit,OnChanges } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit{
  @Input() lineData: any;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [],
    labels: [],
  };

  ngOnInit(): void {
    this.lineChartData.datasets = this.lineData.datasets;
    this.lineChartData.labels = this.lineData.labels;
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(2, 29, 73,0.1)',
        },
        ticks: {
          color: 'rgba(0, 0, 0,1)',
        },
      },
    },

    plugins: {
      legend: { display: true },

    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
}
