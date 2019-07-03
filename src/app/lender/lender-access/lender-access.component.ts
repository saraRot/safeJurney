import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'src/app/students/student-http.service';
import { Student } from 'src/app/students/student.model';


@Component({
  selector: 'app-lender-access',
  templateUrl: './lender-access.component.html',
  styleUrls: ['./lender-access.component.css']
})
export class LenderAccessComponent implements OnInit {

  constructor( private _StudentHttp:StudentHttpService, private _router:Router) { }

  transportationCode: number = 4;
  
  startJourney()
  {

  }
  checkCodeTransportation()
  {
    debugger;
    this._StudentHttp.checkCodeTranspotation(this.transportationCode).subscribe(data => 
    {
      if (data)
        this._router.navigate(['/lender/presence', this.transportationCode]);
    });
  }
  ngOnInit() {
  
  }

}
