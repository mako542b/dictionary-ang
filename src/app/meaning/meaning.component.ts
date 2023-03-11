import { Component, Input } from '@angular/core';
import { meaninginterface } from '../WordInterface';

@Component({
  selector: 'app-meaning',
  templateUrl: './meaning.component.html',
})
export class MeaningComponent {

  @Input() meaning!: meaninginterface

}
