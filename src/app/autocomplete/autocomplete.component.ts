import {  Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input } from '@angular/core';
//import {  } from '@types/googlemaps';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }
  autocompleteInput: string;
  queryWait: boolean;
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext', {static:false}) addresstext: any;
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.getPlaceAutocomplete();
}

private getPlaceAutocomplete() {
  debugger;
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
        {
            // componentRestrictions: { country: 'US' },
            types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
        });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.invokeEvent(place);
    });
}

invokeEvent(place: Object) {
    this.setAddress.emit(place);
}
}
