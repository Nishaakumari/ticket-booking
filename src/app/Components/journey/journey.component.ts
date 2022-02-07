import { SeatBookingService } from 'src/app/Services/seat-booking.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Ticket } from 'src/app/interface/ticket';
import { TicketGenerateService } from 'src/app/Services/ticket-generate.service';
import { Bus } from 'src/app/interface/bus';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  ticket: Ticket | undefined;
  icketId=(Math.random()*100+1)
  bus:Bus={
    "id": 0,
  "Bus Name":'',
  "Departure Time":'',
  "Source":'',
  "Destination":'',
  "Fare":0,
  "Coach Type":'',
  "Seats Available": 0,
  "bookings": 0
  }
  user:{
    username:string,
    mobilenumber:string,
    email:string
  }={
    username:'',
    mobilenumber:'',
    email:''
  }
  constructor(public bookingService:SeatBookingService) { }

  ngOnInit(): void {
    this.bus=<Bus><unknown>this.bookingService.getBusById(this.bookingService.journey.busid);
    this.user=this.bookingService.user;
  }
  }


