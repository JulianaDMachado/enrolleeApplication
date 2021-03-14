import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EnrolleeService } from 'src/app/services/enrollee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-enrollee',
  templateUrl: './update-enrollee.component.html',
  styleUrls: ['./update-enrollee.component.scss']
})
export class UpdateEnrolleeComponent implements OnInit {
  @Input() data = {} as any;
  updateEnrollee = {} as any;
  id = this.data.id;
  enrolleeForm: FormGroup;

  constructor(public bsModalRef: BsModalRef, private service: EnrolleeService, private router: Router) {
    this.enrolleeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      active: new FormControl('')
    });;
  }

  ngOnInit(): void {
    console.log(this.data.id);
    console.log(this.data.status);
    this.service.getEnrolleeDetails(this.data.id).subscribe(
      (resp => {
        this.updateEnrollee = resp as any;
        console.log(this.updateEnrollee.name);
        this.enrolleeForm.get("name").setValue(this.updateEnrollee.name);
        if (this.updateEnrollee.active == true)
          this.enrolleeForm.get("active").setValue("1");
        else
          this.enrolleeForm.get("active").setValue("0");
        console.log(this.enrolleeForm.get("active").value);
      }));
    console.log(this.enrolleeForm.get("active").value);
  }

  onSubmit(): void {
    if (this.enrolleeForm.get("active").value == 0)
      this.enrolleeForm.get("active").setValue(false);
    if (this.enrolleeForm.get("active").value == 1)
      this.enrolleeForm.get("active").setValue(true);

    let formData = this.enrolleeForm.value;
    this.service.updateEnrollee(this.data.id, formData).subscribe(
      () => {
        this.bsModalRef.hide();
        this.router.navigate(['/enrollees']);
      }
    );
  }
}
