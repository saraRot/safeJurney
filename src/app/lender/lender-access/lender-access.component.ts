import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpService } from 'src/app/services/student-http.service';
import { Student } from 'src/app/students/student.model';
import { TransportationHttpService } from 'src/app/services/transportation-http.service';


@Component({
  selector: 'app-lender-access',
  templateUrl: './lender-access.component.html',
  styleUrls: ['./lender-access.component.css']
})
export class LenderAccessComponent implements OnInit {

  constructor( private _TransportationHttp:TransportationHttpService, private _router:Router) { }

  transportationCode: number;
  transportationCodeList: number[];
  //studentList: Student[];
  
  startJourney()
  {
    this._router.navigate(['/lender/navigate-maps', { transportationCode: this.transportationCode}]);
  }
   checkCodeTransportation()
   {
     this._router.navigate(['/lender/presence', { transportationCode: this.transportationCode}]);
   }
  ngOnInit() {
    this._TransportationHttp.getAllTransportationCodes().subscribe(data => {
      this.transportationCodeList = data;
    });
  }

}
