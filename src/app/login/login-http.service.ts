import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {

  constructor(private _http: HttpClient) { }
  
  getStatusUser(id: String): Observable<String> {
    return this._http.get<String>("/api/Login?id="+id);
  }

}
