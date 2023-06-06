import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'projects', component: ProjectsComponent, children: [
      { path: '', component: ProjectListComponent },
      { path: 'dashboard', component: DashboardComponent}
    ]
  },
  { path: 'auth', component: AuthComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
