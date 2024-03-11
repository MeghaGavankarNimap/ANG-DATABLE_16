import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes:Routes=[
  {
    path:'home',
   component:HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
    
  }

  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   MatProgressSpinnerModule,
  ]
})
export class HomeModule { }
