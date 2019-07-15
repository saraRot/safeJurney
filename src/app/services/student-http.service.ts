import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from '../students/student.model'

@Injectable({
  providedIn: 'root'
})

export class StudentHttpService {

  constructor(private _http: HttpClient) { }

  getStudentDetailsById(id: string): Observable<Student> {
    return this._http.get<Student>("/api/Student?id="+id);
  }
  getStudentsByTranportationCode(code: number): Observable<Student[]> {
    debugger;
    return this._http.get<Student[]>("/api/Student?code="+code);
  }
  // checkCodeTranspotation(code: number): Observable<boolean> {
  //   debugger;
  //   return this._http.get<boolean>("/api/transportation?code="+code);
  // }
  updateStudent(student: Student): Observable<boolean> {
    return this._http.post<boolean>("/api/Student", student);
  }
}
