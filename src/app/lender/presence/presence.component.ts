import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/students/student.model';
import{observable}from 'rxjs'
import { StudentHttpService } from '../../students/student-http.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})

export class PresenceComponent implements OnInit {

  constructor( private _activatedRoute: ActivatedRoute, private _StudentHttp:StudentHttpService) { }
 // studentList: Student[]  = [
  //   {id:"1111",firstName:"meir",lastName:"david"},
  //   {id:"2222",firstName:"maya",lastName:"tofik", },
  //   {id:"3333",firstName:"gad",lastName:"rot"},
  //   {id:"4444",firstName:"dan",lastName:"man"},
  //   {id:"5555",firstName:"yair",lastName:"levi"},
  //   {id:"6666",firstName:"noa",lastName:"amar"}

  // ];
  studentList: Student[] = [];
  transportationCode: number;
  
  
  ngOnInit() { 
    this._activatedRoute.paramMap.subscribe(params => {
      debugger;
      if (params.has("transportationCode"))
        debugger;
        this.transportationCode = parseInt(params.get("transportationCode"));
        console.log(this.transportationCode);
    });
    this._StudentHttp.getStudentsByTranportationCode(this.transportationCode).subscribe(data => 
      {
         this.studentList = data;
      });
  }
  
}
