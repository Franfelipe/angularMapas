import { Component, OnInit } from '@angular/core';


import * as L from 'leaflet';
import { PrimeiroMapaService } from 'src/app/services/primeiro-mapa.service';

@Component({
  selector: 'app-primeiro-mapa',
  templateUrl: './primeiro-mapa.component.html',
  styleUrls: ['./primeiro-mapa.component.scss']
})
export class PrimeiroMapaComponent implements OnInit {
  map: any;
  mapOptions: L.MapOptions;

  onMapReady(map: L.Map){
    this.map = map
    L.control.layers(this.primeiroMapaService.BaseUrl).addTo(this.map)
    this.map = this.primeiroMapaService.center(this.map)
    this.primeiroMapaService.BaseUrl.OpenStreetMaps.addTo(this.map);
  }

  tryGeoJson(){
    
  }

  constructor(private primeiroMapaService: PrimeiroMapaService) {
    this.mapOptions = {
      zoom: 12,
      zoomSnap: 0.5,
    };
   }
  ngOnInit(): void {
  }

}
