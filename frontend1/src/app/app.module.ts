import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentslistComponent } from './components/studentslist/studentslist.component';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import { EditstudentsComponent } from './components/editstudents/editstudents.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CourseslistComponent } from './components/courseslist/courseslist.component';
import { ProgramlistComponent } from './components/programlist/programlist.component';
import { BatclistComponent } from './components/batclist/batclist.component';
import { LandingtrainerComponent } from './landingtrainer/landingtrainer.component';
import { LadingadminComponent } from './ladingadmin/ladingadmin.component';
import { TrainerlistComponent } from './trainerlist/trainerlist.component';
import { PlacementofficerlistComponent } from './placementofficerlist/placementofficerlist.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentslistComponent,
    AddstudentsComponent,
    EditstudentsComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CourseslistComponent,
    ProgramlistComponent,
    BatclistComponent,
    LandingtrainerComponent,
    LadingadminComponent,
    TrainerlistComponent,
    PlacementofficerlistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule


  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
