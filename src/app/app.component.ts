import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const API_URL = 'http://nmflightapi.azurewebsites.net/api/flight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'selise-flight-search';
  queries = {};
  flights: any = [];
  loading: boolean = false;
  constructor(private http: HttpClient) {}

  getFlightResults($evt) {
    this.loading = true;
    let params = new HttpParams()
      .set('DepartureAirportCode', $evt.DepartureAirportCode)
      .set('ArrivalAirportCode', $evt.ArrivalAirportCode)
      .set('DepartureDate', $evt.DepartureDate)
      .set('ReturnDate', $evt.ReturnDate);
    this.http.get(API_URL, { params }).subscribe((res) => {
      this.loading = false;
      this.flights = res;
      return res;
    });
  }
}
