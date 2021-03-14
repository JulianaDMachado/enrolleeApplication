import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnrolleeService } from '../../services/enrollee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.scss']
})

export class EnrolleesComponent implements OnInit {

  enrolleeList = [];

  isActive = true;

  constructor(private http: HttpClient, private service: EnrolleeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEnrollees();
  }

  getAllEnrollees(): void {
    this.service.getEnrollees().subscribe((resp => {
      this.enrolleeList = resp as any;
    }));
  }

  toggleStatus(): void {

    if (this.isActive == false) {
      this.service.getEnrollees().subscribe((resp => {
        this.enrolleeList = resp.filter(item => item.active === false);
      }));
      this.isActive = true;
    }

    else {
      this.service.getEnrollees().subscribe((resp => {
        this.enrolleeList = resp.filter(item => item.active === true);
      }));
      this.isActive = false;
    }
  }
}
