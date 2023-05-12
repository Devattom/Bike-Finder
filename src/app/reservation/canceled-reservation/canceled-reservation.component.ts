import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-canceled-reservation',
  templateUrl: './canceled-reservation.component.html',
  styleUrls: ['./canceled-reservation.component.css']
})
export class CanceledReservationComponent implements OnInit {

  stationName: string|null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reservationService: ReservationsService
    ){}

  ngOnInit(): void {
    this.stationName = this.route.snapshot.paramMap.get('stationName');

    
  }

  cancelReservation(){
    this.reservationService.deleteReservation(this.stationName);
    this.router.navigate(['map']);
  }
}
