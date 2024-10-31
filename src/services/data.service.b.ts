// data.service.b.ts
import { Injectable, Type } from '@angular/core';
import { DataService } from './data.abstract.service';
import { ComponentB } from '../components/component-b.component';

@Injectable()
export class DataServiceB implements DataService {
  getComponent(): Type<any> {
    return ComponentB;
  }
}
