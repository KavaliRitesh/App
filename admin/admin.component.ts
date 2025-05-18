import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../car.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  cars: Car[] = [];
  editingCarId: string | null = null;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getCars().subscribe(
      (data: Car[]) => {
        this.cars = data;
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }

  enableEdit(carId: string): void {
    this.editingCarId = carId;
  }

  saveCar(car: Car): void {
    this.carService.updateCar(car._id, car).subscribe(
      () => {
        alert(`Car ${car.make} updated successfully!`);
        this.editingCarId = null;
        this.fetchCars();
      },
      (error) => {
        alert(error.error?.message || 'Update failed');
        console.error('Error updating car:', error);
      }
    );
  }

  cancelEdit(): void {
    this.editingCarId = null;
  }

  deleteCar(carId: string): void {
    if (confirm('Are you sure you want to delete this car?')) {
      this.carService.deleteCar(carId).subscribe(
        () => {
          alert('Car deleted successfully.');
          this.fetchCars();
        },
        (error) => {
          alert(error.error?.message || 'Delete failed');
          console.error('Error deleting car:', error);
        }
      );
    }
  }
}