import { Component, OnInit } from '@angular/core';


import * as L from 'leaflet';
import { PrimeiroMapaService } from 'src/app/services/primeiro-mapa.service';


@Component({
  selector: 'app-primeiro-mapa',
  templateUrl: './primeiro-mapa.component.html',
  styleUrls: ['./primeiro-mapa.component.scss']
})
export class PrimeiroMapaComponent implements OnInit {
  map:any;
  mapOptions: L.MapOptions;
  carros: any;
  arrayPoints:any = [];

  onMapReady(map: L.Map){
    this.map = map
    L.control.layers(this.primeiroMapaService.BaseUrl).addTo(this.map)
    this.map = this.primeiroMapaService.center(this.map)
    this.primeiroMapaService.BaseUrl.OpenStreetMaps.addTo(this.map);
    this.addMarker(this.map)
  }

  constructor(private primeiroMapaService: PrimeiroMapaService) {
    this.mapOptions = {
      zoom: 12,
      zoomSnap: 0.5,
    };
   }

   addMarker(map: L.Map){
    map.addEventListener('click', <LeafletMouseEvent>(point:any)=>{
      var myIcon = L.icon({
        iconUrl: '../../../assets/icons/icon.png',
        iconSize: [35, 52],
        iconAnchor: [12, 31],
        popupAnchor: [0, -41],
  
    });
      var marker = new L.Marker(point.latlng, {icon:myIcon,  draggable: true}).addTo(map)
      this.arrayPoints.push(point.latlng);

      if(this.arrayPoints.length > 3){
        this.drawPolygon(map)
      }
    });
   }

   drawPolygon(map: L.Map){
    var polygon = L.polyline(this.arrayPoints, {color: 'blue'}).addTo(map)
   }

   moveMaker(map: L.Map){
     map.eachLayer(feature =>{
       feature.on('dragend', (a)=>{
         

      })

     })
   }
  ngOnInit(): void {
  }

}
