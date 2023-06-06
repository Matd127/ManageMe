import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './home/navigation/navigation.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AuthComponent } from './auth/auth.component';
import { AuthFormComponent } from './auth/auth-form/auth-form.component';
import { LoginComponent } from './auth/auth-form/login/login.component';
import { RegisterComponent } from './auth/auth-form/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './projects/sidebar/sidebar.component';
import { ProjectsNavbarComponent } from './projects/projects-navbar/projects-navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavigationComponent,
    WelcomeComponent,
    AuthComponent,
    AuthFormComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    ProjectsNavbarComponent,
    DashboardComponent,
    ProjectListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
