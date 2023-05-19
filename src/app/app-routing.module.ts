import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaModule } from './persona/persona.module';



const routes: Routes = [
  { path: '', component: PersonaModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}