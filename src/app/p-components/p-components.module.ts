import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PComponentsRoutingModule } from './p-components-routing.module';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PComponentsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    NgbNavModule,
    NgbCollapseModule
  ],
  exports:[HeaderComponent]
})
export class PComponentsModule { }
