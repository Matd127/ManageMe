import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import Project from 'src/models/Project';
import { Read } from 'src/store/project.action';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent {
  public id: string | null;
  project: Observable<Project | undefined>;
  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.store.dispatch(new Read())
    this.project = this.store.select('project').pipe(
      map(projects => projects.find((project: Project) => project.id === +(this.id ?? -1)) ?? undefined)
    );    

       this.project.subscribe((projectList) => {
      console.log(projectList);
    });
  }
}
