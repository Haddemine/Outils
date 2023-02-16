import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "./common/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDG9qB1SETQWW4IsOoihJ-dq5nMq92W1Zc'
    // }),
    RouterModule,
    SharedModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
