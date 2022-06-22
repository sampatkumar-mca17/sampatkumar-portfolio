import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    component:HomeWrapperComponent,
    children:[
      {
        path:'view',
        component:ViewComponent
      }
    ]
  },

  {
    path:'**',
    component:HomeWrapperComponent
  }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
