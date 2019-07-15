import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Geometry } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-navigate-maps',
  templateUrl: './navigate-maps.component.html',
  styleUrls: ['./navigate-maps.component.css']
})
export class NavigateMapsComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search", {static: false})
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        debugger;
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  //  calcRoute() {
  //   const locations = ['אבני נזר 29, מודיעין עילית','אבני נזר 1, מודיעין עילית', ];
  //   var directionsService = new google.maps.DirectionsService();
  //   var directionsDisplay = new google.maps.DirectionsRenderer();
    
  //     var request = new google.maps.DirectionsRequest();

  //     request = {
  //         origin: '',
  //         destination: '',
  //         waypoints: locations,
  //        // optimizeWaypoints: true,
  //         travelMode: "DRIVING"
  //     }

  //     directionsService.route(request, function(response, status) {
  //         if (status == google.maps.DirectionsStatus.OK) {
  //             directionsDisplay.setDirections(response);
  //             console.log('its dragged')
  //             //document.getElementById('Gresponse').innerHTML = JSON.stringify(response);
  //             createPolyline(response);
  //         }
  //     });
  // };  
}
