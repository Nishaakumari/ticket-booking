import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableBusesComponent } from './Components/available-buses/available-buses.component';

import { JourneyComponent } from './Components/journey/journey.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PassengerComponent } from './Components/passenger/passenger.component';
import { SelectSeatComponent } from './Components/select-seat/select-seat.component';
import { UserComponent } from './Components/user/user.component';
import { ViewTicketComponent } from './Components/view-ticket/view-ticket.component';


const routes: Routes = [
  {path:'',component: UserComponent},
  {path:'availablebuses',component: AvailableBusesComponent},
  {path:'buses/:id',component: SelectSeatComponent},
  {path:'passenger', component: PassengerComponent},
  {path: 'journeyDetails', component: JourneyComponent},
  {path: 'viewticket/:id', component: ViewTicketComponent},
  {path: 'notfound', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
