// import { Component } from '@angular/core';
// import { mobiscroll } from '@mobiscroll/angular-lite';

// mobiscroll.settings = {
//     theme: 'ios',
//     display: 'bubble'
// };

// const now = new Date();

// @Component({
//     selector: 'app-calendar',
//     templateUrl: './calendar.component.html',
//     styleUrls: ['./calendar.component.css']
// })
// export class CalendarComponent {
//     mobile = now;
//     desktop = now;
//     header = now;
//     nonForm = now;
//     external = now;

//     mobileSettings = {
//         controls: ['calendar', 'time'],
//         touchUi: false
//     };

//     desktopSettings = {
//         controls: ['calendar', 'time'],
//         touchUi: false
//     };

//     headerSettings = {
//         controls: ['calendar', 'time'],
//         headerText: '{value}'
//     };

//     nonFormSettings = {
//         controls: ['calendar', 'time'],
//         touchUi: false
//     };

//     externalSettings = {
//         controls: ['calendar', 'time'],
//         showOnTap: false,
//         showOnFocus: false
//     };
// }



// import {Component} from '@angular/core';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html',
//   styleUrls: ['./calendar.component.css']
// })
// export class CalendarComponent {
//   closeResult: string;

//   constructor(private modalService: NgbModal) {}

//   open(content) {
//     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return  `with: ${reason}`;
//     }
//   }
// }


