import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { Create2Component } from './create2/create2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    EditComponent,
    Create2Component
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    FormsModule
  ]
})
export class SongModule { }
