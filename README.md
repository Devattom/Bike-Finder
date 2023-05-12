# App Bike Finder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Init 
First install the node module package
```console
$ npm i
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## How it's work

This app is made to find available bike in the city of Toulouse using the JcDecaux API, it shows all the bike stations of the city with their name and also the number of bikes available.

It's implement the functionality to book a bike in a station where at least one bike is available. Of course this is only an exemple feature but it can work if JcDecaux decide to make this feature.
For now the reservation is set in client-side thanks to LocalStorage, the reservation object is put ino an array and transform into a string, and when it's time to retrieve it, it's convert into an array of object again.
The reservations are managed through book-form.component.ts,canceled-reservation.component.ts and confirmation-reservation.component.ts
We could here improve this feature putting all the reservation into a database. 

For showing the map and all the position in the map leaflet is using, thanks to the leaflet component and the marker service. 

