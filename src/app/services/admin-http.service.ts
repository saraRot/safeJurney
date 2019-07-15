import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../admin/admin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  constructor(private _http: HttpClient ) { }
  
  getAdminDetailsById(id: string): Observable<Admin> {
    return this._http.get<Admin>("/api/Admin?id="+id);
  }
  updateAdmin(admin: Admin): Observable<boolean> {
    return this._http.post<boolean>("/api/Admin", admin);
  }
}
