import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeiroMapaComponent } from './views/primeiro-mapa/primeiro-mapa.component';

const routes: Routes = [
  {path:'primeiro-mapa', component:PrimeiroMapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
