import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-access',
  templateUrl: './admin-access.component.html',
  styleUrls: ['./admin-access.component.css']
})
export class AdminAccessComponent implements OnInit, OnDestroy {
  adminId: String;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     this._activatedRoute.paramMap.subscribe(params => {
       if (params.has("adminId"))
         this.adminId = params.get("adminId");
     });
  }
  ngOnDestroy() {
  }

}
