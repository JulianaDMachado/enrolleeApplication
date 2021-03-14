import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrolleesComponent } from './components/enrollees/enrollees.component';
import { EnrolleeService } from './services/enrollee.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnrolleeDetailsComponent } from './components/enrollees/enrollee-details/enrollee-details.component';
import { UpdateEnrolleeComponent } from './components/enrollees/update-enrollee/update-enrollee.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EnrolleesComponent,
    EnrolleeDetailsComponent,
    UpdateEnrolleeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ EnrolleeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
