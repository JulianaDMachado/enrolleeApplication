import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnrolleeService } from 'src/app/services/enrollee.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UpdateEnrolleeComponent } from '../update-enrollee/update-enrollee.component';

@Component({
  selector: 'enrollee-details',
  templateUrl: './enrollee-details.component.html',
  styleUrls: ['./enrollee-details.component.scss']
})
export class EnrolleeDetailsComponent implements OnInit {

  id: string;
  private sub: any;
  detailedUser = {} as any;
  bsModalRef: BsModalRef;
  @Output() onSuccess = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private router: Router, private service: EnrolleeService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log(this.id);
    this.getEnrolleeById(this.id);
  }

  getEnrolleeById(id): void {
    this.service.getEnrolleeDetails(this.id).subscribe((resp => {
      this.detailedUser = resp as any;
    }));
  }

  updateSuccess(): void {
    this.getEnrolleeById(this.id);
  }

  onBack(): void {
    this.onSuccess.emit();
    this.router.navigate(['/enrollees']);
  }

  openModalOnUpdate(): void {
    const initialState = {
      data: this.detailedUser,
      backdrop: "static"
    };
    this.bsModalRef = this.modalService.show(UpdateEnrolleeComponent, { initialState, backdrop: 'static' });
  }
}
