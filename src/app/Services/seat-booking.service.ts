import { Injectable } from '@angular/core';
import { Bus } from '../interface/bus';
import { TicketGenerateService } from './ticket-generate.service';
import * as data from '../../assets/db.json';

@Injectable({
  providedIn: 'root',
})
export class SeatBookingService {
  journey: any;
  journey1: {
    sourceLocation: string;
    destination: string;
    departureDate: string;
  } = {
    sourceLocation: '',
    destination: '',
    departureDate: '',
  };
  buses: Bus[] = [
    {
      id: 1,
      'Bus Name': 'Gk Transport',
      'Departure Time': '10:00 AM',
      Source: 'Bangalore',
      Destination: 'Jaipur',
      Fare: 600,
      'Coach Type': 'AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 2,
      'Bus Name': 'GK Transport',
      'Departure Time': '10:00 AM',
      Source: 'Jaipur',
      Destination: 'kolkata',
      Fare: 600,
      'Coach Type': 'AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 3,
      'Bus Name': 'SURYA Transport',
      'Departure Time': '10:00 AM',
      Source: 'kolkata',
      Destination: 'Delhi',
      Fare: 600,
      'Coach Type': 'AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 4,
      'Bus Name': 'SURYA Transport',
      'Departure Time': '10:00 AM',
      Source: 'DElhi',
      Destination: 'MUmbai',
      Fare: 600,
      'Coach Type': 'AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 5,
      'Bus Name': 'AVACS Transport',
      'Departure Time': '10:00 AM',
      Source: 'Jaipur',
      Destination: 'Udaipur',
      Fare: 500,
      'Coach Type': 'Non AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 6,
      'Bus Name': 'AVACS Transport',
      'Departure Time': '10:00 AM',
      Source: 'Jaipur',
      Destination: 'Jodhpur',
      Fare: 500,
      'Coach Type': 'Non AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 7,
      'Bus Name': 'TCS Transport',
      'Departure Time': '10:00 AM',
      Source: 'Jaipur',
      Destination: 'Bikaner',
      Fare: 500,
      'Coach Type': 'Non AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 8,
      'Bus Name': 'TCS Transport',
      'Departure Time': '10:00 AM',
      Source: 'Bikaner',
      Destination: 'Ajmer',
      Fare: 500,
      'Coach Type': 'Non AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 9,
      'Bus Name': 'WIPRO Transport',
      'Departure Time': '10:00 AM',
      Source: 'Udaipur',
      Destination: 'Ajmer',
      Fare: 500,
      'Coach Type': 'Non AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 10,
      'Bus Name': 'WIPRO Transport',
      'Departure Time': '10:00 AM',
      Source: 'Udaipur',
      Destination: 'Jaipur',
      Fare: 500,
      'Coach Type': 'Non AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 11,
      'Bus Name': 'Green Transport',
      'Departure Time': '10:00 AM',
      Source: 'Udaipur',
      Destination: 'Jodhpur',
      Fare: 500,
      'Coach Type': 'Non AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 12,
      'Bus Name': 'Green Transport',
      'Departure Time': '10:00 AM',
      Source: 'Udaipur',
      Destination: 'Bikaner',
      Fare: 500,
      'Coach Type': 'AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 13,
      'Bus Name': 'Blue  Transport',
      'Departure Time': '10:00 AM',
      Source: 'Bikaner',
      Destination: 'Jaipur',
      Fare: 500,
      'Coach Type': 'Non AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 14,
      'Bus Name': 'HCL',
      'Departure Time': '10:00 AM',
      Source: 'Bikaner',
      Destination: 'Jodhpur',
      Fare: 500,
      'Coach Type': 'Non AC',
      'Seats Available': 36,
      bookings: {},
    },
    {
      id: 15,
      'Bus Name': 'HCL Transport',
      'Departure Time': '10:00 AM',
      Source: 'Bikaner',
      Destination: 'Udaipur',
      Fare: 500,
      'Coach Type': 'Non AC',
      'Seats Available': 36,
      bookings: {},
    },
  ];
  bus: Bus[] = [];
  getSourceCities: any;
  getDestinationCities: any;
  constructor(private ticketService: TicketGenerateService) {}
  user: {
    username: string;
    mobilenumber: string;
    email: string;
  } = {
    username: '',
    mobilenumber: '',
    email: '',
  };
  getFilteredBuses(from: string, to: string) {
    this.buses.forEach((element) => {
      if (element.Source == from && element.Destination == to) {
        this.bus.push(element);
      }
    });
  }
  getJourneyObject() {
    return this.journey;
  }

  getBusById(id: number) {
    let foundBus:Bus={
      id: 1,
      'Bus Name': 'Gk Transport',
      'Departure Time': '10:00 AM',
      Source: 'Bangalore',
      Destination: 'Jaipur',
      Fare: 600,
      'Coach Type': 'AC',
      'Seats Available': 36,
      bookings: {},
    }
    this.buses.forEach((element) => {
      if(element.id == id){
        foundBus=element;
      };
    });
    return foundBus
  }

  
  setJourneyFare(data: any) {
    this.journey = data;
    console.log(this.journey);
  }



  getSourceCities3() {
    return [...new Set(this.buses.map((bus) => bus.Source))];
  }
  getDestinationCities1() {
    return [...new Set(this.buses.map((bus) => bus['Destination']))];
  }
}
