import { Type } from '@angular/core';

export abstract class DataService {
  abstract getComponent(): Type<any>;
}
