import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { VehicletypesComponent } from './vehicletypes/vehicletypes.component';
import { CarlistComponent } from './carlist/carlist.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { PreviousRentalsComponent } from './previous-rentals/previous-rentals.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FurtherRentalsComponent } from './further-rentals/further-rentals.component';

const routes: Routes=[
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'vehicletypes',component:VehicletypesComponent},
  {path:'carlist',component:CarlistComponent},
  {path:'history',component:PreviousRentalsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'profile', component: ProfileComponent},
  {path:'edit-profile',component:EditProfileComponent},
  {path:'cancelbooking',component:CancelbookingComponent},
  {path: 'further-rentals',component:FurtherRentalsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ForgetpasswordComponent,
    VehicletypesComponent,
    CancelbookingComponent,
    PreviousRentalsComponent,
    CarlistComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
