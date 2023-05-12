import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map,of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JcdecauxService {

  private apiKey: string = 'ce8045324d8dc525fb824133917b277a9cad2b16';
  httpEndPoint: string = `https://api.jcdecaux.com/vls/v3/stations?contract=toulouse&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient){}
  /*get request sur l'API et transformation des data via map operator pour garder uniquement ce dont nous avons besoin. gestion des erreurs pour éviter de faire crash l'appli
  */
  getData(): Observable<any> {
    return this.http.get<any[]>(this.httpEndPoint).pipe(
      map((response) => {
        let arr= [];
        for(let data of response){
          let goodData = {
            name: data.name,
            address: data.address,
            latitude: data.position.latitude,
            longitude: data.position.longitude,
            availableBikes: data.mainStands.availabilities.bikes
          }
          arr.push(goodData);
        }
        return arr; 
        }
      ),
      catchError((error) => this.handleError(error, []))
    ); 
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  } 
}
