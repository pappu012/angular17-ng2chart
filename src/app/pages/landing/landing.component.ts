import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, HttpClientModule, LineChartComponent, BarChartComponent, HeaderComponent, TableComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
  httpClient = inject(HttpClient);
  data: any[] = [];
  chart1: any;
  chart2: any;
  chart3: any[] = [];
  chart4: any[] = [];


  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {

    this.dataService.getChart1().subscribe((response) => {
      this.chart1 = response;
      // console.log(this.chart1, "chart1");
    });

    this.dataService.getChart2().subscribe((response) => {
      this.chart2 = response;
      // console.log(this.chart2, "chart2");
    });

    this.dataService.getChart3().subscribe((response) => {
      this.chart4 = response;
      // console.log(this.chart3, "chart3");
    });

    this.dataService.getChart4().subscribe((response) => {
      this.chart4 = response;
      // console.log(this.chart4, "chart4");
    });

  }
}
