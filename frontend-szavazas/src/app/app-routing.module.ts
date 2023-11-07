import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SzavazasComponent } from './szavazas/szavazas.component';

const routes: Routes = [
  {path:'', component:SzavazasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
