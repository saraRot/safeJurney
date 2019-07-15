import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transportation } from '../transportition.model';
import { TransportationHttpService } from 'src/app/services/transportation-http.service';

@Component({
  selector: 'app-transportation-details',
  templateUrl: './transportation-details.component.html',
  styleUrls: ['./transportation-details.component.css']
})
export class TransportationDetailsComponent implements OnInit {

  @Input()
  transportation: Transportation;
  @Input()
  typeActivity: string;
  @Output()
  onSaveTransportation: EventEmitter<any> = new EventEmitter();

  constructor(private _transportationHttp: TransportationHttpService) { }

  saveTransportation()
  {
    this._transportationHttp.updateTransportation(this.transportation).subscribe(data => {
      this.onSaveTransportation.emit(this.transportation);
    });
  }

  ngOnInit() {
     console.log(this.transportation);
     if (this.transportation != undefined)
     {
       //מקבלת את כל פרטי ההסעה
       this._transportationHttp.getTransportationDetailsById(this.transportation.car_num).subscribe(data => {
        console.log(data);
        this.transportation = data;
       });
      }
      else 
      {
        this.transportation = new Transportation();
      }
  }

}
