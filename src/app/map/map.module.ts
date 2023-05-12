import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './leaflet/leaflet.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



const MapRoutes: Routes = [
  {path: 'map', component: LeafletComponent, title:'Map - trouver votre station'}
]

@NgModule({
  declarations: [
    LeafletComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(MapRoutes)
  ]
})
export class MapModule { }
