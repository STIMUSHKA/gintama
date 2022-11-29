import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getSeasonsInfo() {
    return {
        seasons:[
          {
            name: '1 season',
            series: [
              {name: '1 episode'},
              {name: '2 episode'},
              {name: '3 episode'},
              {name: '4 episode'},
              {name: '5 episode'},
              {name: '6 episode'},
              {name: '7 episode'},
              {name: '8 episode'},
              {name: '9 episode'},
              {name: '10 episode'},
              {name: '11 episode'},
              {name: '12 episode'},
            ]
          },
          {
            name: '2 season',
            series: [
              {name: '1 episode'},
              {name: '2 episode'},
              {name: '3 episode'},
              {name: '4 episode'},
              {name: '5 episode'},
              {name: '6 episode'},
              {name: '7 episode'},
              {name: '8 episode'},
              {name: '9 episode'},
              {name: '10 episode'},
              {name: '11 episode'},
              {name: '12 episode'},
              {name: '13 episode'},
              {name: '13 episode'},
              {name: '15 episode'},
              {name: '16 episode'},
              {name: '17 episode'},
              {name: '18 episode'},
              {name: '19 episode'},
              {name: '20 episode'},
              {name: '21 episode'},
              {name: '22 episode'},
              {name: '23 episode'},
              {name: '24 episode'},
            ]
          },{
            name: '3 season',
            series: [
              {name: '1 episode'},
              {name: '2 episode'},
              {name: '3 episode'},
              {name: '4 episode'},
              {name: '5 episode'},
              {name: '6 episode'},
              {name: '7 episode'},
              {name: '8 episode'},
              {name: '9 episode'},
              {name: '10 episode'},
              {name: '11 episode'},
              {name: '12 episode'},
              {name: '13 episode'},
              {name: '13 episode'},
              {name: '15 episode'},
              {name: '16 episode'},
              {name: '17 episode'},
              {name: '18 episode'},
              {name: '19 episode'},
              {name: '20 episode'},
              {name: '21 episode'},
              {name: '22 episode'},
              {name: '23 episode'},
              {name: '24 episode'},
            ]
          },
        ]
      }
    }

}
