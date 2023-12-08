import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  lazy loading
const routes: Routes = [{ path: 'tasklist', loadChildren: () => import('./tasklist/tasklist.module').then(m => m.TasklistModule) },
{path:"",redirectTo:'tasklist',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
