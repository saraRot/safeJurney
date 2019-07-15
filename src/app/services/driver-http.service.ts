import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../driver/driver.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export
 class DriverHttpService {

  constructor(private _http: HttpClient ) { }
  
  getDriverDetailsById(id: string): Observable<Driver> {
    return this._http.get<Driver>("/api/Driver?id="+id);
  }
  updateDriver(driver: Driver): Observable<boolean> {
    return this._http.post<boolean>("/api/Driver", driver);
  }}
