import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../../interfaces/interface';

@Component({
  selector: 'app-room-list',
  standalone: false,
  
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit  {
  @Input() rooms:RoomList[]=[];
  @Output() roomselected:EventEmitter<RoomList> =new EventEmitter<RoomList>();
  constructor(){}
  ngOnInit() :void{}
  selectRoom(room:RoomList){
    this.roomselected.emit(room);
  }
  
}
