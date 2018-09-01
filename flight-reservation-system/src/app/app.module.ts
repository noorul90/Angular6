import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Noorul Changes */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

/* import { AppRoutingModule } from './app-routing.module'; */
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { SearchFlightComponent } from './search-flight/search-flight.component';
import { BookFlightComponent } from './book-flight/book-flight.component'; */

/*@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    BookFlightComponent
  ],*/
  @NgModule({
    declarations: [
      AppComponent,
      routingComponents
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class AppBootstrapModule { }