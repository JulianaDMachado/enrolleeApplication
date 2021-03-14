import { Component, OnInit } from '@angular/core';
import { EnrolleeService } from '../../services/enrollee.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.scss']
})

export class EnrolleesComponent implements OnInit {
  private _enrollees: Array<User>;
  enrollees = [];

  isActive = false;

  constructor(private service: EnrolleeService) { }

  ngOnInit(): void {
    this.getAllEnrollees();
  }

  getAllEnrollees(): void {
    this.service.getEnrollees().subscribe((resp => {
      this._enrollees = resp;
      this.enrollees = this._enrollees;
    }));
  }

  toggleStatus(): void {
    this.isActive = !this.isActive;
    if (this._enrollees) {
      if (this.isActive) {
        this.enrollees = this._enrollees.filter(item => item.active);
      }
      else {
        this.enrollees = this._enrollees.filter(item => !item.active);
      }
    }
  }
}
