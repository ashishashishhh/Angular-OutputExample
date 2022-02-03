import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  @Output()  newTechEvent=new EventEmitter<string>();
  ngOnInit(): void {
  }

  addNewItem(value:any){
    this.newTechEvent.emit(value);
  }

}
