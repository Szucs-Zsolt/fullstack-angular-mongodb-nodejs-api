import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SzavazasComponent } from './szavazas/szavazas.component';
import { EredmenyComponent } from './eredmeny/eredmeny.component';

const routes: Routes = [
  {path:'', component:SzavazasComponent},
  {path:'eredmeny', component:EredmenyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
