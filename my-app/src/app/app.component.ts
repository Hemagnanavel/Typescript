import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
 // template:`<h1> Hello world from inline</h1>
 // <p>angular is awesome</p>`, 
  styleUrls: ['./app.component.css'],
 imports: [CommonModule, RoomsComponent]
})
export class AppComponent {
  title = 'app';
}
 