import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from '../components/user/user.component';
import {AboutComponent} from '../components/user/about.component';
import {UserdetailsComponent} from '../components/user/userdetails.component';
import {RegisterStudentComponent} from '../components/user/student/registerstudent.component';
import {StudentDetailComponent} from '../components/user/student/studentdetail.component';
import {SearchComponent} from '../components/sidebar/searchuser/searchuser.component';


const appRoutes: Routes = [
      {
        path:'',
        component: AboutComponent
      },
        {
        path:'user',
        component: UserComponent
    },
            {
        path:'user/:id',
        component: UserdetailsComponent
    },
             {
        path:'registerstudent',
        component: RegisterStudentComponent
    },
             {
        path:'student/:id',
        component: StudentDetailComponent
    },
             {
        path:'search',
        component: SearchComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

