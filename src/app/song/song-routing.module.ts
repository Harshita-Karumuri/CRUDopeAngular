import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Create2Component } from './create2/create2.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'song/home',component:HomeComponent},
  {path: 'song',redirectTo:'song/home',pathMatch:'full'},
  {path:'',redirectTo:'song/home',pathMatch:'full'},
  {path:'song/create2',component:Create2Component},
  {path:'song/edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
