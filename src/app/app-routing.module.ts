import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ProfessorUpdateComponent } from './pages/account/components/updates/professor-update/professor-update.component';
import { ChecklistUpdateComponent } from './pages/account/components/updates/checklist-update/checklist-update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'student', component: FormStudentsComponent},
  { path: 'professor-home', component: StudentSelectComponent },
  { path: 'update-prof', component: ProfessorUpdateComponent},
  { path: 'adm-home', component: ProfessorSelectComponent },
  { path: 'list-students', component: ListStudentsComponent },
  { path: 'list-professors', component: ListProfessorsComponent },
  { path: 'checklist/:id_student', component: ChecklistComponent },
  { path: 'checklist-update/:id_student', component: ChecklistUpdateComponent },
  { path: 'report', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
