import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'persona', redirectTo: 'persona/index', pathMatch: 'full'},
  { path: 'persona/index', component: IndexComponent },
  { path: 'persona/:idPersona/view', component: ViewComponent },
  { path: 'persona/create', component: CreateComponent },
  { path: 'persona/:idPersona/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
