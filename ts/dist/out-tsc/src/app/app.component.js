import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
let AppComponent = class AppComponent {
    title = 'home';
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        imports: [RouterOutlet],
        //templateUrl: './app.component.html',
        template: "<h1>hema</h1>",
        styleUrl: './app.component.css'
    })
], AppComponent);
export { AppComponent };
