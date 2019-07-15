import { Component,EventEmitter, OnInit, Input, Output, ViewChild, NgZone, ElementRef } from '@angular/core';
import { Student } from '../student.model';
import { StudentHttpService } from '../../services/student-http.service';
import { TransportationHttpService } from 'src/app/services/transportation-http.service';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input()
  student: Student;
  @Input()
  typeActivity: string;
  @Output()
  onSaveStudent: EventEmitter<any> = new EventEmitter();
  transportationCodeList: number[];
  @ViewChild('formDetailsStudent', {static: false})
  formDetailsStudent: any;
  flagFormValid: boolean = true;
  @ViewChild("search", {static: false})
  public searchElementRef: ElementRef;
  public searchControl: FormControl;


  constructor(private _StudentHttp: StudentHttpService, private _TransportationHttp: TransportationHttpService, 
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngAfterViewInit()
  {
  }
  saveStudent()
  {
    if(this.formDetailsStudent.valid)
    {
    this._StudentHttp.updateStudent(this.student).subscribe(data => {
      this.onSaveStudent.emit(this.student);
    });
  }
  else
  {
    alert("form not valid");
    debugger;
    this.flagFormValid = false;
  }
   }

  ngOnInit() {
     console.log(this.student);
     if (this.student != undefined)
     {
       //מקבלת את כל פרטי התלמיד
       this._StudentHttp.getStudentDetailsById(this.student.student_id).subscribe(data => {
        console.log(data);
        this.student = data;
       });
      }
      else 
      {
        this.student = new Student();
      }
      this._TransportationHttp.getAllTransportationCodes().subscribe(data => {
        this.transportationCodeList = data;
      });   
      this.searchControl = new FormControl();
      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
          debugger;
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          });
        });
      });
    }
  }

