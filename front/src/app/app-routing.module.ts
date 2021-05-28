import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { QrscanComponent } from './components/Qrscan/qrscan.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { BusinessComponent } from './components/business/business.component';
import { BusinessloginComponent } from './components/businesslogin/businesslogin.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'qrscan', component: QrscanComponent },
  { path: 'qrgen', component: GeneratorComponent },
  { path: 'business', component: BusinessComponent},
  { path: 'businesslogin', component: BusinessloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
