import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './interfaces/rooms/rooms.component';
import { RoomListComponent } from './interfaces/rooms/room-list/room-list.component';
import { InputOutputEventComponent } from './interfaces/rooms/input-output-event/input-output-event.component';




@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    InputOutputEventComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
