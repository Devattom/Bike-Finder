import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})


export class MarkerService {

  setMarkerToMap(map: L.Map, x: number, y: number, icon: any, ) {
    return L.marker([x, y], {icon: icon}).addTo(map) 
  }
  
}
