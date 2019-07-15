import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lender } from '../lender/lender.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LenderHttpService {

  constructor(private _http: HttpClient ) { }
  
  getLenderDetailsById(id: string): Observable<Lender> {
    return this._http.get<Lender>("/api/Lender?id="+id);
  }
  updateLender(lender: Lender): Observable<boolean> {
    debugger;
    return this._http.post<boolean>("/api/Lender", lender);
  }
}
