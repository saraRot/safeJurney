import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private _http: HttpClient) { }
  
//   getMap(): Observable<boolean> {
//     return this._http.send<boolean>("https://maps.googleapis.com/maps/api/js?key=");
//   }
//   map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
//   var autocomplete = new google.maps.places.Autocomplete(routeFrom);
//   autocomplete.bindTo('bounds', map);
//   var autocomplete1 = new google.maps.places.Autocomplete(routeTo);
//   autocomplete1.bindTo('bounds', map);
//   directionsDisplay.setMap(map);
//   directionsDisplay.setPanel(document.getElementById("directions"));
}
