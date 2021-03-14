import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EnrolleeService } from 'src/app/services/enrollee.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
const SUCCESS_MSG = 'User was updated successfully';
@Component({
  selector: 'app-update-enrollee',
  templateUrl: './update-enrollee.component.html',
  styleUrls: ['./update-enrollee.component.scss']
})
export class UpdateEnrolleeComponent implements OnInit {
  @Input() data: User;
  updateEnrollee = {} as any;
  enrolleeForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private service: EnrolleeService,
    private router: Router,
    private toastrService: ToastrService) {
    this.buildForm();
  }


  private buildForm() {
    this.enrolleeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      active: new FormControl('')
    });;
  }

  ngOnInit(): void {
    this.fillForm();
  }

  private fillForm() {
    this.enrolleeForm.get("name").setValue(this.data.name);
    this.enrolleeForm.get("active").setValue(this.data.active ? '1' : '0');
  }

  onSubmit(): void {
    const req: User = {
      active: this.enrolleeForm.get("active").value === '1' ? true : false,
      name: this.enrolleeForm.value.name,
    }
    this.service.updateEnrollee(this.data.id, req).subscribe(
      () => {
        this.toastrService.success(SUCCESS_MSG);
        this.bsModalRef.hide();
        this.router.navigate(['/enrollees']);
      }
    );
  }
}
