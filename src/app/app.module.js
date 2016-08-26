
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component.js';
//import { StateListModule } from "../../state-list.package.js";
import { StateListModule } from "../../node_modules/ng2-es6-component/lib/state-list.js";
//import { StateListModule} from "ng2-es6-component";
//import { StateListModule } from "../../node_modules/index.js";

export class AppModule {
        constructor() {
            console.log(StateListModule);
            console.log("abc")

        }
    }

AppModule.annotations = [
    new NgModule({
        imports: [ BrowserModule],
        declarations: [ AppComponent],
        bootstrap: [ AppComponent ]
    })
];


