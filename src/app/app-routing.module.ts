import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableBusesComponent } from './Components/available-buses/available-buses.component';
import { JourneyComponent } from './Components/journey/journey.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PassengerComponent } from './Components/passenger/passenger.component';
import { SelectSeatComponent } from './Components/select-seat/select-seat.component';
import { UserComponent } from './Components/user/user.component';
import { ViewTicketComponent } from './Components/view-ticket/view-ticket.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'home',canActivate:[AuthGuard], component: UserComponent},
  {path:'availablebuses',canActivate:[AuthGuard],component: AvailableBusesComponent},
  {path:'buses/:id',canActivate:[AuthGuard],component: SelectSeatComponent},
  {path:'passenger', canActivate:[AuthGuard],component: PassengerComponent},
  {path: 'journeyDetails', canActivate:[AuthGuard],component: JourneyComponent},
  {path: 'viewticket/:id', canActivate:[AuthGuard],component: ViewTicketComponent},
  {path: 'notfound', canActivate:[AuthGuard],component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
