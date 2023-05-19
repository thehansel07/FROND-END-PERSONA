import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaModule } from './persona/persona.module';
import { IndexComponent } from './persona/index/index.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}