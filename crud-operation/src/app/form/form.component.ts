import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  name:string='';
  age!:number;
  gender!:string;
  @Output() newItemEvent = new EventEmitter<string>();

  sendDetails(value:any){
    this.newItemEvent.emit(value);

  }


}
