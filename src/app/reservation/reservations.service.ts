import { Injectable } from '@angular/core';
import { Reservation } from '../Reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor() {}
  //ajoute une reservation dans localStorage
  addReservation(station:string, customerName: string, customerEmail: string, reservationDate: string) {
    const reservations: Reservation[] = this.retrievedReservation();

    const reservation: Reservation = {
      stationBooked : station,
      name : customerName,
      email : customerEmail,
      date : reservationDate
    }

    reservations.push(reservation);
   
    localStorage.setItem('reservation', JSON.stringify(reservations));
  }

  //supprime reservation dans le localStorage
  deleteReservation(stationName:string|null) {
    let reservations = this.retrievedReservation();
    for(let i = 0; i < reservations.length; i++){
      if(reservations[i].stationBooked === stationName){
       reservations.splice(i, 1)
      }
    }
    
    localStorage.setItem('reservation', JSON.stringify(reservations));   
  }

  //supprime reservation avec date expirée
  deleteExpiredReservation(){
    let reservations: Reservation[] = this.retrievedReservation();
    for(let i = 0; i < reservations.length; i++){
      if(new Date(reservations[i].date) < new Date()){
        reservations.splice(i, 1)
      }
    }
    localStorage.setItem('reservation', JSON.stringify(reservations)); 
  }

  //cherche si une reservation existe renvoie true ou false
  doesReservationExists(stationName:string|null): boolean {
    let reservations: Reservation[] = this.retrievedReservation();
    for(let eachReservation of reservations){
      if(eachReservation.stationBooked === stationName){
        return true;
      } 
    }
    return false;
  }


  //renvoie les reservations contenus dans localStorage
  retrievedReservation(): Reservation[] {
    return JSON.parse(localStorage.getItem('reservation') || '[]');
  }
}
