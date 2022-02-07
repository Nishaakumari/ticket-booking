import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { SeatBookingService } from 'src/app/Services/seat-booking.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  passenger: FormGroup = this.formBuilder.group({});
  submitted : boolean = false;
  journey: any;
  Router: any;

  constructor(private formBuilder: FormBuilder,
    private bookingService: SeatBookingService,
    private router: Router) { }

  ngOnInit(): void {
    this.journey = this.bookingService.getJourneyObject();
    if(!this.journey){

    }
    else{
      this.passenger = this.formBuilder.group({
        username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        mobilenumber: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
        email: ['',[Validators.required, Validators.email]]
      });}
  }
  get formControl() {
    return this.passenger.controls;
  }
  onFormSubmit() {
    this.submitted = true;
    if (this.passenger.invalid)
        return;
    console.log(this.passenger.value);
    this.bookingService.user=this.passenger.value;
    this.router.navigate(['/journeyDetails']);
  }
}
