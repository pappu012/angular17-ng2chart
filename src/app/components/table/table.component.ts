import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule,],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent  implements OnInit{
  constructor(private dataService: DataService, private http: HttpClient) {}
  data: any[] = [];
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
       console.log(this.data, "chart1");
    });
  }

}
