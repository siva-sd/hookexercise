import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { HooklifecycleComponent } from './hooklifecycle/hooklifecycle.component';

const routes: Routes = [
  {path:'',component:ParentComponent},
  {path:'**', component:HooklifecycleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
