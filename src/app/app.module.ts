import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CapitalViewComponent } from './capital-view/capital-view.component';
import { CapitalsService } from './capitals.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrenciesComponent } from './currencies/currencies.component';
import { AsiansComponent } from './asians/asians.component';
import { AsianDetailsComponent } from './asian-details/asian-details.component';
import { AsianMapsComponent } from './asian-maps/asian-maps.component'

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CapitalViewComponent,
    CurrenciesComponent,
    AsiansComponent,
    AsianDetailsComponent,
    AsianMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CapitalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
