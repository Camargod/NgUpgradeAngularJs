import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular2Component } from './angular2/Angular2-Component/Angular2-Component.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'angular'
  },
  {
    path:"angular",
    component: Angular2Component
  }
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes,{
      useHash:true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
