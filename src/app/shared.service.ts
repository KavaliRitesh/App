import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private city: string = '';
  private carname: string = '';

  // Method to set both city and carname
  setCityAndCar(city: string, carname: string): void {
    this.city = city;
    this.carname = carname;
  }

  // Method to get both city and carname
  getCityAndCar(): { city: string, carname: string } {
    return { city: this.city, carname: this.carname };
  }
}