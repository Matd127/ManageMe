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
import { ProjectModule } from 'src/store/projectStore/project.module';
import { UserModule } from 'src/store/userStore/user.module';
import { TaskModule } from 'src/store/taskStore/task.module';
import { FunctionalityModule } from 'src/store/functionalityStore/functonality.module';
import { ProjectComponent } from './projects/project/project.component';
import { FormsModule } from '@angular/forms';
import { AddProjectModalComponent } from './projects/add-project-modal/add-project-modal.component';
import { AddTaskModalComponent } from './projects/project/add-task-modal/add-task-modal.component';
import { AddFunctionalityModalComponent } from './projects/project/add-functionality-modal/add-functionality-modal.component';
import { EditProjectModalComponent } from './projects/edit-project-modal/edit-project-modal.component';
import { EditFunctionalityModalComponent } from './projects/project/edit-functionality-modal/edit-functionality-modal.component';
import { EditTaskModalComponent } from './projects/project/edit-task-modal/edit-task-modal.component';
import { AuthGuard } from 'src/guards/AuthGuard';
import { ProjectGuard } from 'src/guards/ProjectGuard';
import { AdminDevopsGuard } from 'src/guards/AdminDevopsGuard';

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
    ProjectComponent,
    AddProjectModalComponent,
    AddTaskModalComponent,
    AddFunctionalityModalComponent,
    EditProjectModalComponent,
    EditFunctionalityModalComponent,
    EditTaskModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    StoreModule.forRoot({}),
    ProjectModule,
    UserModule,
    FunctionalityModule,
    TaskModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    ProjectGuard,
    AdminDevopsGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
