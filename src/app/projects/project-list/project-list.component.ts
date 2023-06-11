import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Read, Delete } from 'src/store/projectStore/project.action';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  projects: Observable<any[]>;
  isAdminOrDevops = false;
  loggedUser : any

  constructor(private store: Store<any>, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.store.dispatch(new Read());
    this.projects = this.store.select('project');

    const getUserFromLocalStorage = localStorage.getItem('user')
    this.loggedUser = getUserFromLocalStorage && JSON.parse(getUserFromLocalStorage)
    if(this.loggedUser[0].role === 'admin' || this.loggedUser[0].role === 'devops') {
      this.isAdminOrDevops = !this.isAdminOrDevops
    }
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title'})
  }

  deleteProject(id : number) {
    console.log(id)
    this.store.dispatch(new Delete({id}))
  }
}
