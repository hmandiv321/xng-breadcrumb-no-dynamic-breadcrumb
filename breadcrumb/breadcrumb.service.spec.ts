import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import 'zone.js/dist/zone-testing';

import { BreadcrumbService } from './breadcrumb.service';

describe('BreadcrumbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    });
  });

  it('should be created', async () => {
    const service: BreadcrumbService = TestBed.get(BreadcrumbService);
    expect(service).toBeTruthy();
  });
});
