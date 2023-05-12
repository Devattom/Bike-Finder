import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { BookFormComponent } from './book-form/book-form.component';
import { CguComponent } from '../cgu/cgu.component';
import { CanceledReservationComponent } from './canceled-reservation/canceled-reservation.component';
import { ConfirmationReservationComponent } from './confirmation-reservation/confirmation-reservation.component';



const FormRoutes: Routes = [
  {path: 'reserver', component: BookFormComponent, title: 'FindBiker - Réservez votre vélo'},
  { path:'cgu', component: CguComponent, title:'CGU'},
  { path :'confirmation/:stationName/:customerName/:date', component:ConfirmationReservationComponent, title: 'Confirmation de réservation'},
  { path:'cancel/:stationName', component: CanceledReservationComponent, title: 'BikerFinder - Annulez votre réservation' },
]

@NgModule({
  declarations: [
    BookFormComponent,
    CguComponent,
    CanceledReservationComponent,
    ConfirmationReservationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(FormRoutes)
  ]
})
export class ReservationModule { }
