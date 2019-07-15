import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Driver } from '../driver.model';
import { DriverHttpService } from 'src/app/services/driver-http.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  @Input()
  driver: Driver;
  @Input()
  typeActivity: string;
  @Output()
  onSaveDriver: EventEmitter<any> = new EventEmitter();
  transportationCodeList: number[];

  constructor(private _DriverHttp: DriverHttpService) { }

  saveDriver()
  {
    this._DriverHttp.updateDriver(this.driver).subscribe(data => {
      this.onSaveDriver.emit(this.driver);
    });
  }

  ngOnInit() {
     console.log(this.driver);
     if (this.driver != undefined)
     {
       //מקבלת את כל פרטי התלמיד
        this._DriverHttp.getDriverDetailsById(this.driver.driver_id).subscribe(data => {
        console.log(data);
        this.driver = data;
       });
      }
      else 
      {
        this.driver = new Driver();
      }

  }

}
