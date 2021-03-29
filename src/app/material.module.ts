import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

const MaterialComponents = [
  BrowserAnimationsModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatGridListModule
];

@NgModule({
  imports: [
    MaterialComponents,
  ],
  exports: [
    MaterialComponents,
  ],
})
export class MaterialModule { }