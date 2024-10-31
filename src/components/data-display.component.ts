// data-display.component.ts
import {
  Component,
  Inject,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core';
import { DATA_SERVICE_TOKEN } from '../services/data.service.token';
import { DataService } from '../services/data.abstract.service';

@Component({
  selector: 'app-data-display',
  template: '<ng-template #dynamicComponent></ng-template>',
  standalone: true,
})
export class DataDisplayComponent implements AfterViewInit {
  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  constructor(@Inject(DATA_SERVICE_TOKEN) private dataService: DataService) {}

  ngAfterViewInit() {
    const component = this.dataService.getComponent();
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(component);
  }
}
