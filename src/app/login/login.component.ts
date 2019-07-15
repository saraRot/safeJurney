import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { LoginHttpService } from './login-http.service';
import{Router}from "@angular/router"
import { Student } from '../students/student.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
constructor(private _LoginHttp: LoginHttpService, private _router:Router) {}

  userCodeFromServer: String;
  userCode: String;
  userId: String;
  status: String;
  checkValidation:boolean = true;
  checkIdExists: boolean = true;
  checkCodeUser:boolean=true;
  //אם הוזן מספר זהות קיים מנווט ואם מדובר במנהל מחזיר בנוסף לסטטוס גם סיסמא
  checkPersonality()
  {
    if(this.userId.length < 9)
      this.checkValidation = false;
    else
    {
      this._LoginHttp.getStatusUser(this.userId).subscribe(data =>
      {
        if (data.length == 0)
           this.checkIdExists = false;
        else 
        {
        this.status = data[0].toString();
        if (this.status == "lender")   
            this._router.navigate(['/lender', {lenderId: this.userId}]);
        if (this.status == "student")
            this._router.navigate(['/parent', {studentId: this.userId}]);
        if (this.status == "admin")
            this.userCodeFromServer = data[1].toString();
        }
      }); 
    }     
  }
  //מנווט למנהל אם הסיסמא נכונה
  checkCodeAdmin()
  {
    console.log(this.userCode); 
    debugger;
    if (this.userCodeFromServer == this.userCode)
       this._router.navigate(['/admin', this.userId]);
    else
       this.checkCodeUser=false;
  }

  ngOnInit() {
  }

}
