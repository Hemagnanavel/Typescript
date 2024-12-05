import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-output-event',
  standalone: false,
  
  templateUrl: './input-output-event.component.html',
  styleUrl: './input-output-event.component.css'
})
export class InputOutputEventComponent {
@Input() click:number=0;
@Output() clickEventEmitter:EventEmitter<number>=new EventEmitter<number>()

resetNumber(){

  this.clickEventEmitter.emit(0)
}
}
