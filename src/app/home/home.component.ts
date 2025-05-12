import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    isSignedIn = false;  // Assume user is not signed in

    bookCar() {
        if (!this.isSignedIn) {
            alert("Please sign in first to book a car.");
        } else {
            alert("Redirecting to car booking...");
        }
    }
}
