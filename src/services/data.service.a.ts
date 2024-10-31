// data.service.a.ts
import { Injectable, Type } from '@angular/core';
import { DataService } from './data.abstract.service';
import { ComponentA } from '../components/component-a.component';

@Injectable()
export class DataServiceA implements DataService {
  getComponent(): Type<any> {
    return ComponentA;
  }
}
