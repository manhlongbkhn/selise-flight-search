import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface IFlight {
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
export class FlightListComponent implements OnInit {
  @Input() flights: Array<IFlight> = [];
  constructor() {}
  displayedColumns: string[] = [
    'AirlineName',
    'OutboundFlightsDuration',
    'InboundFlightsDuration',
    'TotalAmount',
  ];
  searchText: string = '';
  dataSource;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges(changes) {
    this.searchText = '';
    this.paginator.firstPage();
    if (changes.flights && changes.flights.currentValue) {
      this.dataSource = new MatTableDataSource(changes.flights.currentValue);
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
