import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-functionality-modal',
  templateUrl: './add-functionality-modal.component.html',
  styleUrls: ['./add-functionality-modal.component.scss'],
})
export class AddFunctionalityModalComponent {
  name = '';
  description = '';
  priority = '';
  state = 'Todo';

  constructor( private modalService: NgbModal) {}

  closeModal() {
    this.modalService.dismissAll();
  }
}
