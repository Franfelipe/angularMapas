import { Component, OnInit } from '@angular/core';


import * as L from 'leaflet';

@Component({
  selector: 'app-primeiro-mapa',
  templateUrl: './primeiro-mapa.component.html',
  styleUrls: ['./primeiro-mapa.component.scss']
})
export class PrimeiroMapaComponent implements OnInit {
  map: any;
  mapOptions: L.MapOptions;
  constructor() {
    this.mapOptions = {
      center: L.latLng(51.505, 0),
      zoom: 12,
      layers: [
        L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
   }


  onMapReady(map: L.Map){
    this.map = map
    const marker = new L.Marker([51.51, 0])
    marker.addTo(this.map)
  }
  ngOnInit(): void {
  }

}
