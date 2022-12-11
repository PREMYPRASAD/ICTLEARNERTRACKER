import { ProgramlistComponent } from './components/programlist/programlist.component';
import { BatclistComponent } from './components/batclist/batclist.component';
import { CourseslistComponent } from './components/courseslist/courseslist.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import { EditstudentsComponent } from './components/editstudents/editstudents.component';
import { LoginComponent } from './components/login/login.component';
import { StudentslistComponent } from './components/studentslist/studentslist.component';
import { LadingadminComponent } from './ladingadmin/ladingadmin.component';
import { LandingtrainerComponent } from './landingtrainer/landingtrainer.component';
import { TrainerlistComponent } from './trainerlist/trainerlist.component';
import { PlacementofficerlistComponent } from './placementofficerlist/placementofficerlist.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },

  {path:'login',component:LoginComponent},
  {path:'landingadmin',component:LadingadminComponent},
  {path:'landingtrainer',component:LandingtrainerComponent},
  {path:'studentslist',component:StudentslistComponent},
  {path:'add-students',component:AddstudentsComponent},
  {path:'edit-students',component:EditstudentsComponent},
  {path:'trainerlist',component:TrainerlistComponent},
  {path:'placementofficerlist',component:PlacementofficerlistComponent},

  // path for admin settings
  {path:'batch-list',component:BatclistComponent},
  {path:'course-list',component:CourseslistComponent},
  {path:'program-list',component:ProgramlistComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
