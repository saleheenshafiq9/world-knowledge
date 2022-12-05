import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsianDetailsComponent } from './asian-details/asian-details.component';
import { AsianMapsComponent } from './asian-maps/asian-maps.component';
import { AsiansComponent } from './asians/asians.component';
import { CapitalViewComponent } from './capital-view/capital-view.component';
import { CountriesComponent } from './countries/countries.component';
import { CurrenciesComponent } from './currencies/currencies.component';

const routes: Routes = [
  {path: 'currencies', component: CurrenciesComponent},
  {path: 'capitals', component: CapitalViewComponent},
  {path: 'asians', component: AsiansComponent},
  {path: 'asians/:id', component: AsianDetailsComponent, children: [
    {path: 'maps', component: AsianMapsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
