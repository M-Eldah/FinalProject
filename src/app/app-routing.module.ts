import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"Login",
    loadChildren: ()=>import('./login/login.module').then((m)=>m.LoginModule)
  },
  {
    path:"User",
    component:UserComponent
  },
  {
    path:"Admin",
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
