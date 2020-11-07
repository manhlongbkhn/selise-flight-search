import { AfterViewInit, Component, ViewChild, OnInit, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';

export interface Flight {
  AirlineLogoAddress: string;
  AirlineName: string;
  InboundFlightsDuration: string;
  ItineraryId: string;
  OutboundFlightsDuration: string;
  Stops: number;
  TotalAmount: number;
}


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnInit, AfterViewInit {
  @Input() flights:[] = [];
  constructor() {}
  displayedColumns: string[] = [
    'AirlineName',
    'OutboundFlightsDuration',
    'InboundFlightsDuration',
    'TotalAmount',
  ];

  ngOnInit(): void {
    
  }
  // dataSource = new MatTableDataSource(this.flights);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}
