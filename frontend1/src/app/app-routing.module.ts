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
import { TrainingheadListComponent } from './components/traininghead-list/traininghead-list.component';
import { PlacementofficerListComponent } from './components/placementofficer-list/placementofficer-list.component';
import { TrainingheadLandingComponent } from './components/traininghead-landing/traininghead-landing.component';
import { PlacementofficerLandingComponent } from './components/placementofficer-landing/placementofficer-landing.component';
import { PlacementofficerEditStudentsComponent } from './components/placementofficer-edit-students/placementofficer-edit-students.component';
import { TrainingheadAddStudentsComponent } from './components/traininghead-add-students/traininghead-add-students.component';
import { TrainingheadEditStudentsComponent } from './components/traininghead-edit-students/traininghead-edit-students.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },

  {path:'login',component:LoginComponent},
  {path:'landingadmin',component:LadingadminComponent},
  {path:'landingtrainer',component:LandingtrainerComponent},
  {path:'studentslist',component:StudentslistComponent},
  {path:'add-students',component:AddstudentsComponent},
  {path:'edit-students',component:EditstudentsComponent},
 // {path:'trainerlist',component:TrainerlistComponent},
  {path:'placementofficerlist',component:PlacementofficerlistComponent},

  {path:'user-list',component:TrainingheadListComponent},
  // {path:'placementofficer-list',component:PlacementofficerListComponent},
  {path:'user-add',component:UserAddComponent},
  {path:'user-edit', component:UserEditComponent},

  // path for admin settings
  {path:'batch-list',component:BatclistComponent},
  {path:'course-list',component:CourseslistComponent},
  {path:'program-list',component:ProgramlistComponent},

  // path for traininghead login

  {path:'traininghead-landing',component:TrainingheadLandingComponent},
  {path:'traininghead-add-students',component:TrainingheadAddStudentsComponent},
  {path:'traininghead-edit-students',component:TrainingheadEditStudentsComponent},

  // path for placementofficer login

  {path:'placementofficer-landing',component:PlacementofficerLandingComponent},
  {path:'placementofficer-edit-students',component:PlacementofficerEditStudentsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
