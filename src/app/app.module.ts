import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/authentication/components/login/login.component';
import { RegisterComponent } from './pages/authentication/components/register/register.component';
import { FormStudentsComponent } from './pages/account/components/forms/form-students/form-students.component';
import { StudentSelectComponent } from './pages/account/components/page-select/student-select/student-select.component';
import { ProfessorSelectComponent } from './pages/account/components/page-select/professor-select/professor-select.component';
import { ListStudentsComponent } from './pages/account/components/list/list-students/list-students.component';
import { ListProfessorsComponent } from './pages/account/components/list/list-professors/list-professors.component';
import { ChecklistComponent } from './pages/account/components/forms/checklist/checklist.component';
import { ReportComponent } from './pages/account/components/forms/report/report.component';
import { UpdateComponent } from './pages/authentication/components/update/update.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from '../api-interceptor.service';
import { ProfessorUpdateComponent } from './pages/account/components/updates/professor-update/professor-update.component';
import { ChecklistUpdateComponent } from './pages/account/components/updates/checklist-update/checklist-update.component';
import { NoReportComponent } from './pages/account/components/forms/no-report/no-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FormStudentsComponent,
    StudentSelectComponent,
    ProfessorSelectComponent,
    ListStudentsComponent,
    ListProfessorsComponent,
    ChecklistComponent,
    ReportComponent,
    UpdateComponent,
    ProfessorUpdateComponent,
    ChecklistUpdateComponent,
    NoReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
