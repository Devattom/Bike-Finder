import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation-reservation.component.html',
  styleUrls: ['./confirmation-reservation.component.css']
})
export class ConfirmationReservationComponent implements OnInit, OnDestroy {

  stationName: string | null;
  customerName: string|null;
  reservationDate: string|null;
  progressSpinner: number = 0;
  interval: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ){}

  ngOnInit(): void {
    this.stationName = this.route.snapshot.paramMap.get('stationName');
    this.customerName = this.route.snapshot.paramMap.get('customerName');
    this.reservationDate = this.route.snapshot.paramMap.get('date');

    setTimeout(() => {
      this.router.navigate(['map']);
    }, 7000)

    this.add10;
    this.interval = setInterval(() => {
      this.add10()
      
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.interval){
      clearInterval(this.interval)
    }
  }
  
  add10(){
    this.progressSpinner += 15;
  }

  
}
