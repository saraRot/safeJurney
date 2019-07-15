import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/students/student.model';
import{observable}from 'rxjs'
import { StudentHttpService } from '../../services/student-http.service';
import { ActivatedRoute } from '@angular/router';
import { parse } from 'querystring';



@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})

export class PresenceComponent implements OnInit {

  constructor( private _activatedRoute: ActivatedRoute, private _StudentHttp:StudentHttpService) { }

  studentList: Student[] = [];
  transportationCode: number;
  presenceStudentList: Student[] = [];
  presenceFlag: boolean = false;
  
  marked(selectedStudents: Student)
  {
    debugger;
    this.presenceStudentList.push(selectedStudents);
    selectedStudents.persence = true;
  }
  
  ngOnInit() { 
    this._activatedRoute.paramMap.subscribe(params => {
      if (params.has("transportationCode"))
      {
        this.transportationCode = parseInt(params.get("transportationCode"));
        this._StudentHttp.getStudentsByTranportationCode(this.transportationCode).subscribe(data => 
        {
          this.studentList = data;
        });
      }
    });
    
  }
  
}
