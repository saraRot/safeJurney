import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lender } from '../lender.model';
import { LenderHttpService } from 'src/app/services/lender-http.service';

@Component({
  selector: 'app-lender-details',
  templateUrl: './lender-details.component.html',
  styleUrls: ['./lender-details.component.css']
})
export class LenderDetailsComponent implements OnInit {

  @Input()
  lender: Lender;
  @Input()
  typeActivity: string;
  @Output()
  onSaveLender: EventEmitter<any> = new EventEmitter();

  constructor(private _LenderHttp: LenderHttpService) { }

  saveLender()
  {
    this._LenderHttp.updateLender(this.lender).subscribe(data => {
      debugger;
      this.onSaveLender.emit(this.lender);
    });
  }

  ngOnInit() {
     console.log(this.lender);
     if (this.lender != undefined)
     {
       //מקבלת את כל פרטי התלמיד
       this._LenderHttp.getLenderDetailsById(this.lender.lender_id).subscribe(data => {
        console.log(data);
        this.lender = data;
       });
      }
      else 
      {
        this.lender = new Lender();
      }
  }
}
