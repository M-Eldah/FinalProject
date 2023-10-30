import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"Login",
    loadChildren: ()=>import('./login/login.module').then((m)=>m.LoginModule)
  },
  {
    path:"User",
    loadChildren: ()=>import('./user/user.module').then((m)=>m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
