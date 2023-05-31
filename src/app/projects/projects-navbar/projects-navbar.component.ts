import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects-navbar',
  templateUrl: './projects-navbar.component.html',
  styleUrls: ['./projects-navbar.component.scss'],
})
export class ProjectsNavbarComponent {

  @Input() toggleSidebar : boolean
  @Output() toggleEvent = new EventEmitter<boolean>();

  setToggleSidebar() {
    this.toggleEvent.emit(this.toggleSidebar)
  }

}
