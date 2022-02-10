import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { JourneyComponent } from './Components/journey/journey.component';
import { PassengerComponent } from './Components/passenger/passenger.component';
import { SelectSeatComponent } from './Components/select-seat/select-seat.component';
import { ViewTicketComponent } from './Components/view-ticket/view-ticket.component';
import { AvailableBusesComponent } from './Components/available-buses/available-buses.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './Components/user/user.component';
import { TicketGenerateService } from './Services/ticket-generate.service';
import { SeatBookingService } from './Services/seat-booking.service';
import { SeatNamePipe } from './pipes/seatname.pipe';
import { LoginComponent } from './Components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JourneyComponent,
    PassengerComponent,
    SelectSeatComponent,
    ViewTicketComponent,
    AvailableBusesComponent,
    NotFoundComponent,
    UserComponent,
    SeatNamePipe,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [SeatBookingService,TicketGenerateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
