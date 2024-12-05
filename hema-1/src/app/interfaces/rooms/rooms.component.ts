import { Component, OnInit } from '@angular/core';
import { room, RoomList } from '../interfaces/interface';
@Component({
  selector: 'app-rooms',
  standalone: false,

  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {

  public hotelname = 'A2B';
  public numberOfRooms = 10;
  public hideRooms = false;
  public rooms: room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };
  roomList: RoomList[] = [];
  count!: number;
  clicks:number=0;

  constructor() { }
  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'air conditioner,Free wi-fi,TV,bathroom',
      price: 500,
      photos: "",
      checkinTime: new Date('11-Nov-2024'),
      checoutTime: new Date('12-Nov-2024'),
      rating: 4.5

    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'air conditioner,Free wi-fi,TV,bathroom',
      price: 1000,
      photos: "",
      checkinTime: new Date('11-Nov-2024'),
      checoutTime: new Date('12-Nov-2024'),
      rating: 4.3

    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room',
      amenities: 'air conditioner,Free wi-fi,TV,bathroom',
      price: 1500,
      photos: "",
      checkinTime: new Date('11-Nov-2024'),
      checoutTime: new Date('12-Nov-2024'),
      rating: 3.1

    }

    ];
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
 selectRoom(room: RoomList){
  console.log(room);
 }

 increcement(){
  this.clicks+=1;

 }
 captureEvent(event:number){
  console.log(event);
  this.clicks+=10;
 }
 
}
