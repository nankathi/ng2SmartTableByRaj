import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {AppRoutes} from './routeConfig';
import { HomeComponent } from "./home.component";
import {SmartTableComponent} from './smartTable/smartTable.component';
import {SmartTableDemoComponent} from './smartTableDemo/smartTableDemo.component';
@NgModule({
    imports: [BrowserModule, FormsModule,AppRoutes],
    declarations: [HomeComponent,SmartTableComponent,SmartTableDemoComponent],
    bootstrap: [HomeComponent]
})
export class AppModule { }
