import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bus } from 'src/app/interface/bus';
import { SeatBookingService } from 'src/app/Services/seat-booking.service';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css'],
})
export class SelectSeatComponent implements OnInit {
  busId: any;
  busDetails: Bus={
    "id": 0,
  "Bus Name":'',
  "Departure Time":'',
  "Source":'',
  "Destination":'',
  "Fare":0,
  "Coach Type":'',
  "Seats Available": 0,
  "bookings": 0
  };
  journey: any;
  seatStatus: boolean[] = new Array(36).fill(false);
  form: FormGroup = new FormGroup({
    seats: new FormArray([]),
  });
  selectedSeats: string[] = [];
  submitted: boolean = false;

  newSeats: string[] = [
    '1A',
    '1B',
    '1C',
    '2A',
    '2B',
    '2C',
    '3A',
    '3B',
    '3C',
    '5A',
    '5B',
    '5C',
  ];
  constructor(
    private route: ActivatedRoute,
    private bookingService: SeatBookingService,
    private router: Router
  ) {}

  get seats() {
    return this.form.get('seats') as FormArray;
  }

  ngOnInit(): void {
    this.journey = this.bookingService.getJourneyObject();
    if (typeof this.journey != 'undefined') {
    }
    // this.router.navigate(['']);
    else {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.busId = <string>params.get('id');
        this.busDetails = this.bookingService.getBusById(<number>this.busId);
        console.log(this.busDetails)
        if (!this.busDetails) {
          this.router.navigate(['']);
          return;
        }
        var seatStatus = null//this.busDetails.bookings[this.bookingService.journey1.departureDate];
        if (seatStatus) this.seatStatus = seatStatus;
      });
      this.seatStatus.forEach(() => {
        this.seats.push(new FormControl(false));
      });
      // @ts-ignore
      this.form.get('seats').valueChanges.subscribe((selectedValue) => {
        this.selectedSeats = [];
        for (var i = 0; i < 36; i++) {
          if (selectedValue[i]) this.selectedSeats.push(i.toString());
        }
      });
    }
  }
  seatSelected(seat: string) {
    if (this.selectedSeats.includes(seat)){
      this.selectedSeats.splice(this.selectedSeats.indexOf(seat),1);
    }
    else{
      this.selectedSeats.push(seat);
    }
  }
  confirm() {
    if(this,this.selectedSeats.length==0){
      alert('Select atleast one seat to continue')
    }
    else{
      this.bookingService.setJourneyFare(
        {
          'busid':this.busId,
        fare:this.busDetails["Fare"],
        selectedSeats:this.selectedSeats}
      );
      this.router.navigate(['/passenger']);
    }

  }
}
