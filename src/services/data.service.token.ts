// data.service.token.ts
import { InjectionToken } from '@angular/core';
import { DataService } from './data.abstract.service';

export const DATA_SERVICE_TOKEN = new InjectionToken<DataService>(
  'DataService'
);
