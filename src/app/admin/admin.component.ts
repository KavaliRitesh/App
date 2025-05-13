import { Component, OnInit } from "@angular/core";
import { Car, Rental } from "../adminmodels";
import { CarService } from "../services/car.service";
import { RentalService } from "../services/rental.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] // If you have CSS
})
export class AdminComponent implements OnInit {
  cars: Car[] = [];
  rentals: Rental[] = [];
  userId:number=1234;

  constructor(private carService: CarService, private rentalService: RentalService) {}

  ngOnInit() {
    this.loadCars();
    this.loadRentals();
  }

  loadCars() {
    this.cars = this.carService.getCars();
  }

  loadRentals() {
    this.rentals = this.rentalService.getRentals();
  }

  manageCars() {
    console.log("Managing cars...");
  }

  viewRentals() {
    console.log("Viewing rentals...");
  }

  viewRentalHistory() {
    return this.rentals.filter(r => r.userId === this.userId);
  }
}
