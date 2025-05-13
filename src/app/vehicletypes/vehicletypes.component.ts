import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-vehicletypes',
  templateUrl: './vehicletypes.component.html',
  styleUrls: ['./vehicletypes.component.css']
})
export class VehicletypesComponent implements OnInit {
  cars: any[] = [];
  selectedcars: any;
  selectedCity: string = '';
  locations:string[]=["Banglore","Chennai","Hyderbad","Mumbai"];

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.cars = [
      {  name: 'SUV', Model: 2023, Luggage: '2 bags', milage:30, photo: '/assets/Suv1.jpeg' },
      {  name: 'Seaden', Model: 2022, Luggage: '6 bags',milage:20, photo: '/assets/sedan.jfif' },
      {  name: 'Hyundai-i20', Model: 2021, Luggage: '3 bags',milage:25, photo: '/assets/Hyundai.webp'},
      {  name: 'Honda City', Model: 2020, Luggage: '4 bags',milage:35, photo: '/assets/honda.jfif' },
      {  name: 'Traveller', Model: 2016, Luggage: '6 bags',milage:40, photo: '/assets/Tempo1.jpg' }
    ];
    this.selectedcars = this.cars[0];//default car image 1 will be displayed
  
  }

  public selectcar(car: any): void {
    this.selectedcars = car;
  }

  public booknow(): void {
    this.sharedService.setCity(this.selectedCity);
    console.log('City set in shared service:', this.selectedCity);
    this.router.navigate(['/carlist']);
  }

  public onCityChange(event: any): void {
    this.selectedCity = event.target.value;
    console.log('Selected city:', this.selectedCity);
  }
}