import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transportation } from '../transportation/transportition.model';

@Injectable({
  providedIn: 'root'
})
export class TransportationHttpService {

  constructor(private _http: HttpClient) { }

  getTransportationDetailsById(id: string): Observable<Transportation> {
    return this._http.get<Transportation>("/api/Transportation?id="+id);
  }
  updateTransportation(transportation: Transportation): Observable<boolean> {
    return this._http.post<boolean>("/api/Transportation", transportation);
  }
  getAllTransportationCodes(): Observable<number[]> {
    return this._http.get<number[]>("api/Transportation/TransportationCodes");
  }
}
