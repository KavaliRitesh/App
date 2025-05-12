import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  bookings = [
    {
      //sample bookings
      date: 'Sat, Mar 29, 01:09 PM',
      type: 'Alto',
      city: 'Lucknow',
      fare: '200',
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v1.png',
      AvaImg: 'https://i.pravatar.cc/40?img=5',
      status: ''
    },
    {
      date: 'Wed, Mar 26, 06:48 PM',
      type: 'Prime SUV',
      city: 'Pune',
      fare: '342',
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v1.png',
      AvaImg: 'https://i.pravatar.cc/40?img=6',
      status: ''
    },
    {
      date: 'Thu, Feb 06, 02:20 PM',
      type: 'Mini',
      city: 'Banglore',
      fare: '404',
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v2.png',
      AvaImg: 'https://i.pravatar.cc/40?img=7',
      status: ''
    },
    {
      date: 'Mon, Jan 06, 08:12 AM',
      type: 'Mini',
      city: 'Mumbai',
      fare: '225',
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v2.png',
      AvaImg: 'https://i.pravatar.cc/40?img=8',
      status: ''
    },
    {
      date: 'Sun, Dec 15, 07:54 PM',
      type: 'Mini',
      city: 'Hyderabad',
      fare: '',
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v2.png',
      AvaImg: 'https://i.pravatar.cc/40?img=9',
      status: 'cancelled'
    },
    {
      date: 'Sun, Dec 15, 03:58 PM',
      type: 'Mini',
      city: 'Andhra Pradesh',
      fare: '',
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v2.png',
      AvaImg: 'https://i.pravatar.cc/40?img=10',
      status: 'cancelled'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Here you can fetch real booking data later from backend/API
  }
}
