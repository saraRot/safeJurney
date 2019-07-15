import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { parse } from 'url';
import { Student } from 'src/app/students/student.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {

  constructor(private _ServiceHttp: HttpServiceService,private _activatedRoute:ActivatedRoute ) { }
  personality: String;
  properties: String[];
  personaliesList: any[] = [];
  //tagNameComponent: String = "app-student-details";
  selectedPerson: any;
  flagDetails: boolean = false;
  typeActivity: string;

  //htmlDetailsToAdd: string = '<app-student-details [student] = "selectedPerson"></app-student-details> &amp; the Hare';

  // @ViewChild('table') tag:ElementRef;

  // ngAfterViewInit() {
  //   debugger;
  //   this.tag.nativeElement.insertAdjacentHTML('afterend', '<app-student-details [student] = "selectedPerson"></app-student-details>');
  // }

  //פונקציה למחיקת אישות
  delete(selectedPerson)
  {
    this._ServiceHttp.deletePersonality(this.personality, selectedPerson[this.properties[0].toString()]).subscribe(data => {console.log("delete");});
    this.personaliesList.splice(this.personaliesList.indexOf(selectedPerson), 1);
  }
  details(selectedPerson)
  {
    this.typeActivity = "פרטים";
    this.selectedPerson = selectedPerson;
    this.flagDetails = true;
  }
  newPerson()
  {
    this.typeActivity = "הוספה";
    this.flagDetails = true;
  }
  editPerson(selectedPerson)
  {
    this.typeActivity = "עריכה";
    this.selectedPerson = selectedPerson;
    this.flagDetails = true;   
  }
  savePersonToList(person)
  {
    this.flagDetails = false;
    debugger;
    let index = this.personaliesList.findIndex( p => p[this.properties[0].toString()] == person[this.properties[0].toString()]);
    if (index == -1)
       this.personaliesList.push(person);
    else 
       this.personaliesList[index] = person;
  }
  ngOnInit() {
    console.log(this.flagDetails);
    this._activatedRoute.paramMap.subscribe(params => {
      if (params.has("personality"))
      {
        this.personality = params.get("personality");
        //this.tagNameComponent += "app-"+this.personality+"-details"
      }
    });
    console.log(this.personality);
    //לקבלת רשימת התלמידים עם נתונים בסיסיים
    this._ServiceHttp.getPersonalityList(this.personality).subscribe(data => 
    {
       this.personaliesList = data.sort(x => x.first_name);
       this.properties = Object.keys(data[0])
       console.log(Object.keys(data[0]));
       console.log(data);
    });
  } 
}
