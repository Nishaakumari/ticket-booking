import { TestBed } from '@angular/core/testing';

import { TicketGenerateService } from './ticket-generate.service';

describe('TicketGenerateService', () => {
  let service: TicketGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketGenerateService);
  });

  it('should be created', () => {
    const service:TicketGenerateService=TestBed.get(TicketGenerateService);
    expect(service).toBeTruthy();
  });
  it('should return  true when generateTicket method', () => {
    const service:TicketGenerateService=TestBed.get(TicketGenerateService);
    expect(service.generateTicket ).toBeTruthy()
  });
});
