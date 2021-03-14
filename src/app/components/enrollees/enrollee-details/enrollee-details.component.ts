import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnrolleeService } from 'src/app/services/enrollee.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UpdateEnrolleeComponent } from '../update-enrollee/update-enrollee.component';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'enrollee-details',
  templateUrl: './enrollee-details.component.html',
  styleUrls: ['./enrollee-details.component.scss']
})
export class EnrolleeDetailsComponent implements OnInit, OnDestroy {

  _id: string;
  private _routerSub$: Subscription;
  user: User;
  bsModalRef: BsModalRef;

  constructor(private route: ActivatedRoute, private router: Router, private service: EnrolleeService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this._routerSub$ = this.route.params.subscribe(params => {
      this._id = params['id'];
      this.getEnrolleeById();
    });
  }

  getEnrolleeById(): void {
    this.service.getEnrolleeDetails(this._id).subscribe((resp => {
      this.user = resp;
    }), (eron => {
      this.onBack();
    }));
  }

  onBack(): void {
    this.router.navigate(['/enrollees']);
  }

  openModalOnUpdate(): void {
    const initialState = {
      data: this.user,
      backdrop: "static"
    };
    this.bsModalRef = this.modalService.show(UpdateEnrolleeComponent, { initialState, backdrop: 'static' });
  }

  ngOnDestroy(): void {
    this._routerSub$.unsubscribe();
  }
}
