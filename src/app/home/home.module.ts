import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { HomeRoutingModule } from './home-routing.module';
import { HomeWrapperComponent } from './home-wrapper/home-wrapper.component';
// import { PComponentsModule } from '../p-components/p-components.module';
import { ViewComponent } from './view/view.component';
import { ProfileComponent } from './profile/profile.component';
import { StartAPostComponent } from './start-a-post/start-a-post.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeWrapperComponent,
    ViewComponent,
    ProfileComponent,
    StartAPostComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FontAwesomeModule,
    HomeRoutingModule,
    // PComponentsModule
  ]
})
export class HomeModule { }
