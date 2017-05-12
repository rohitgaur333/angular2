import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MainpalletComponent} from './components/mainpallet/mainpallet.component';

import { UserComponent }  from './components/user/user.component';
import {AboutComponent} from './components/user/about.component';
import {SearchComponent} from './components/sidebar/searchuser/searchuser.component';
import {UserdetailsComponent} from './components/user/userdetails.component';
import {RegisterStudentComponent} from './components/user/student/registerstudent.component';
import {StudentDetailComponent} from './components/user/student/studentdetail.component';

import {routing} from './routes/app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidebarComponent,
    MainpalletComponent,
    UserComponent,
    AboutComponent,
    SearchComponent,
    UserdetailsComponent,
    RegisterStudentComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
