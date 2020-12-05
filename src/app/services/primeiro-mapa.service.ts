import { Injectable } from '@angular/core';
import * as L from 'leaflet'
@Injectable({
    providedIn: 'root',
})
export class PrimeiroMapaService{
    constructor(){
    }

    BaseUrl = {
        OpenStreetMaps: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),

        Satelite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
    }

    fitBounds(map: L.Map, boundCoordinates: any): L.Map {
        const bounds = new L.LatLngBounds(boundCoordinates);
        return map.fitBounds(bounds, {});
    }

    center(map: L.Map): L.Map {
        const bounds = [
            L.latLng(-32.469539, -53.265079),
            L.latLng(4.217858, -61.014782),
            L.latLng(-7.76285, -36.290681),
            L.latLng(-7.516711, -70.283978)
        ];
        return this.fitBounds(map, bounds);
    }


}