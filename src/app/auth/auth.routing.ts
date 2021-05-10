import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'registerlogin', component: AuthContainerComponent,
    children:[

        { path: '', component: LoginComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
    ]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
