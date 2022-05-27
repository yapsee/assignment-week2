import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesDetailsComponent } from './classes-details/classes-details.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { StudentsListComponent } from './students-list/students-list.component';


const routes: Routes = [
  {
    path: 'classes',
    component: ClassesListComponent
  },
  {
    path: '',
    component: StudentsListComponent
  },
  {
    path: 'students',
    component: StudentsListComponent
  },
  {
    path: 'classes/details/:name',
    component: ClassesDetailsComponent
  },
  {
    path: 'details/:id',
    component: ClassesDetailsComponent
  }
  ,
  {
    path: '**',   redirectTo: '/classes', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
