import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../Customer';
import { Reservation } from '../../Reservation';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  stationName: string|null;
  bikeNumber: string | null;
  
  /*on utilise des valeurs en dur mais pour une application finie il faudrait récupérer les valeurs de l'utilisateur actuellement connecté.
  Il faut donc obliger la création d'un compte pour utiliser le service*/
  
  customer:Customer= {
    lastName: '',
    firstName: '',
    email: ''
  }

  allReservations: Reservation[] = [];

  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationsService) {}

  ngOnInit(): void {
    //récupération des infos via URL
    this.route.queryParams.subscribe(params => {
      this.stationName = params['name'];
      this.bikeNumber = params['dispo']
    })
    
    //si la réservation existe déjà, on dirige vers la page d'annulation.
    if(this.reservationService.doesReservationExists(this.stationName)) {
      this.router.navigate(['cancel', this.stationName]);
    }
    
  }
  
  
  //le nombre de vélo est bien > 0
  isBikeAvailable(numberOfBike: string): Boolean{
    if(numberOfBike === '0') {
      return false;
    } else {
      return true;
    }
  }

  //la date sélectionnée n'est pas dans le passé
  isDateValid(date: string): boolean{
    const currentDate = new Date();
    const selectedDate = new Date(date);
    
    if(selectedDate < currentDate) {
      return false;
      
    } else {
      return true;
    }
    
  }

  //on ajoute la réservation et on réoriente vers une page de confirmation
  onSubmit(station: string, customerName: string, customerEmail: string, reservationDate: string) {
    
    this.reservationService.addReservation(station,customerName, customerEmail, reservationDate)
    this.router.navigate(['confirmation', this.stationName, customerName, reservationDate]);
    
  }
  
}
