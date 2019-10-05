import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

declare const e: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  constructor() { }
  focus: any;
  focus1: any;


  zoom: number = 15;

  // initial center position for the map
  lat: number = 43.258828;
  lng: number = -79.9230954;
  markers: Marker[] = [
    {
      lat: 43.258871,
      lng: -79.921116,
      label: '',
      draggable: false
    }
  ];

  ngOnInit() { }


  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
