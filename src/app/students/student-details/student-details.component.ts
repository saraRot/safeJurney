import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Student } from '../student.model';
import { StudentHttpService } from '../student-http.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input()
  student: Student;
  @Output()
  onSaveStudent: EventEmitter<any> = new EventEmitter();

  constructor(private _StudentHttp: StudentHttpService) { }

  saveStudent()
  {
    this._StudentHttp.updateStudent(this.student).subscribe(data => {
      this.onSaveStudent.emit(this.student);
    });
  }

  ngOnInit() {
     console.log(this.student);
     if (this.student != undefined)
     {
       this._StudentHttp.getStudentDetailsById(this.student.student_id).subscribe(data => {
        console.log(data);
        this.student = data;
       });
      }
      else 
      {
        this.student = new Student();
        // this.student.student_id="1236456";
        // this.student.groups_code=3;
        // this.student.last_name="fhjk";
        // this.student.neighborhood_code=12;
        // this.student.num_station_warning=4;
        // this.student.phone="0894533552";
        // this.student.first_name="jhdkf";
        // this.student.student_address="ghjk";
        // this.student.transportation_forth_code=3;
        // this.student.transportation_return_code=4;
      }
  }

}
