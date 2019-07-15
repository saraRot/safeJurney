import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Admin } from '../admin.model';
import { AdminHttpService } from 'src/app/services/admin-http.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  @Input()
  admin: Admin;
  @Input()
  typeActivity: string;
  @Output()
  onSaveAdmin: EventEmitter<any> = new EventEmitter();
  transportationCodeList: number[];

  constructor(private _AdminHttp: AdminHttpService) { }

  saveAdmin()
  {
    this._AdminHttp.updateAdmin(this.admin).subscribe(data => {
      this.onSaveAdmin.emit(this.admin);
    });
  }

  ngOnInit() {
     if (this.admin != undefined)
     {
       //מקבלת את כל פרטי התלמיד
        this._AdminHttp.getAdminDetailsById(this.admin.admin_id).subscribe(data => {
        console.log(data);
        this.admin = data;
       });
      }
      else 
      {
        this.admin = new Admin();
      }

  }

}
