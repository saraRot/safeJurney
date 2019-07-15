import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private _http: HttpClient) {}
  
  getPersonalityList(personality: String): Observable<any[]> {
    return this._http.get<any[]>("/api/"+personality);
  }

  deletePersonality(personality: String, code: number): Observable<boolean> {
    return this._http.delete<boolean>("/api/"+personality+"?code="+code);
  }

}