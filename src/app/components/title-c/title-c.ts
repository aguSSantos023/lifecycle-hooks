import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title-c',
  imports: [],
  templateUrl: './title-c.html',
  styleUrl: './title-c.css',
})
export class TitleC implements OnChanges{

  title = input.required<string>()


  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnCHanges');

    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
