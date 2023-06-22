import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectComponent } from './projects/project/project.component';
import { AuthGuard } from 'src/guards/AuthGuard';
import { ProjectGuard } from 'src/guards/ProjectGuard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [ProjectGuard],
    children: [
      { path: '', component: ProjectListComponent },
      { path: 'project/:id', component: ProjectComponent },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
  { path: 'auth', component: AuthComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
