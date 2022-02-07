import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/interface/bus';
import { SeatBookingService } from 'src/app/Services/seat-booking.service';

@Component({
  selector: 'app-available-buses',
  templateUrl: './available-buses.component.html',
  styleUrls: ['./available-buses.component.css']
})
export class AvailableBusesComponent implements OnInit {

  availableBuses:Bus[]=[];
  keys = ["Bus Name","Departure Time", "Coach Type","Seats Available","Fare"];
  constructor(private bookingService: SeatBookingService) { }

  ngOnInit(): void {
    this.availableBuses = this.bookingService.bus;
    console.log(this.availableBuses)
  }
  navigateBack(){

  }


  }


