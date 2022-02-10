import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeatBookingService } from 'src/app/Services/seat-booking.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  journey = new  FormGroup({
    sourceLocation: new FormControl('',Validators.required),
    destination: new FormControl('',Validators.required),
    departureDate: new FormControl('',Validators.required)
});
  submitted : boolean = false;
  sourceCities: string[] = []
  destinationCities: string[] =[]
  constructor(private formBuilder: FormBuilder,
    private bookingService: SeatBookingService,
    private router: Router) { }

  ngOnInit(): void {
    this.sourceCities = this.bookingService.getSourceCities3();
    this.destinationCities = this.bookingService.getDestinationCities1();
    this.journey
// {
//   validators: [this.validJourney('sourceLocation', 'destination'),
//   this.validDate('departureDate')]
// });
}
   validJourney(src: string, dst: string) {
    return (formGroup: FormGroup) => {
      const source = formGroup.controls[src];
      const destination = formGroup.controls[dst];
      if (destination.value!="" && source.value === destination.value){
          destination.setErrors(
            {invalidJourney: true}
          );
      }
    }

  }
get formControl() {
  return this.journey.controls;
}
validDate(date: string) {
     return (formGroup: FormGroup) => {
    const dateControl = formGroup.controls[date];
    const journeydate=new Date(dateControl.value);
    const currentdate = new Date()
    currentdate.setHours(0,0,0,0);
    if (journeydate.getTime() <  currentdate.getTime()){
        dateControl.setErrors({
          oldDate:true
        });
    }
  }
}
onSubmit(){
  console.log(this.journey.value)
  this.bookingService.journey1=this.journey.value;
  this.bookingService.getFilteredBuses(this.journey.value['sourceLocation'],this.journey.value['destination']);
this.router.navigate(['/availablebuses'])
}

logout(){
  localStorage.removeItem('user')
}

}
