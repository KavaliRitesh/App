import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Car {
  _id: string;
  make: string;
  model: string;
  cartype: string;
  carCategory: string;
  year: number;
  pricePerKm: number;
  pricePerDay: number;
  availabilityStatus: string;
  currentOdometer: number;
  imageUrl: string[];
  features: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:3000/api/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  updateCar(carId: string, car: Car): Observable<any> {
    return this.http.put(`${this.apiUrl}/${carId}`, car);
  }

  deleteCar(carId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${carId}`);
  }
}