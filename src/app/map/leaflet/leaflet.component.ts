import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ReservationsService } from 'src/app/reservation/reservations.service';
import { JcdecauxService } from '../jcdecaux/jcdecaux.service';
import { MarkerService } from './marker.service';





@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']

})
export class LeafletComponent implements AfterViewInit, OnInit{

  private map: L.Map;
  private icon: {} = L.icon({
    iconUrl: '../../assets/velo_icon2.png',
    iconSize: [30,30],
    popupAnchor: [0, -10]
  })

  constructor(
    private markerService: MarkerService, 
    private jcdecauxService: JcdecauxService,
    private reservationService: ReservationsService
    ){}
  
  ngOnInit(): void {
   this.reservationService.deleteExpiredReservation();
  }

  ngAfterViewInit(): void {
    //souscription à l'observable retourné par le service et generation des marqueur sur la carte
    this.jcdecauxService.getData().subscribe(response => {
        for(let data of response){
        this.markerService.setMarkerToMap(this.map, data.latitude,data.longitude, this.icon).bindPopup(
          `<div class="popup-container">
            <p class="name">Nom : ${data.name}</p>
            <p class="address">Adresse : ${data.address}</p>
            <p>Vélos disponibles : ${data.availableBikes}</p>
            <a href="reserver?name=${data.name}&dispo=${data.availableBikes}"class="link">Réserver</a>
        `
        
        )
    }
    });

    //coordonnées de Toulouse
      let x: number = 43.604;
      let y: number = 1.44;
      let z: number = 12;

    this.startAMap(x, y, z);
      
     
  }

  //genere la map
  private startAMap(x: number, y: number, z: number): L.Map{

    let map = L.map('map').setView(
      [x, y],
      z
    );
    
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

  return this.map = map;

  }

}
