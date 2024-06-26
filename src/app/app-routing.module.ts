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
import { NoReportComponent } from './pages/account/components/forms/no-report/no-report.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'update', component: UpdateComponent, canActivate: [AuthGuard] },
  { path: 'student', component: FormStudentsComponent, canActivate: [AuthGuard] },
  { path: 'professor-home', component: StudentSelectComponent, canActivate: [AuthGuard]  },
  { path: 'update-prof', component: ProfessorUpdateComponent, canActivate: [AuthGuard] },
  { path: 'adm-home', component: ProfessorSelectComponent, canActivate: [AuthGuard]  },
  { path: 'list-students', component: ListStudentsComponent, canActivate: [AuthGuard]  },
  { path: 'list-professors', component: ListProfessorsComponent, canActivate: [AuthGuard]  },
  { path: 'checklist/:id_student', component: ChecklistComponent, canActivate: [AuthGuard]  },
  { path: 'checklist-update/:id_student', component: ChecklistUpdateComponent, canActivate: [AuthGuard]  },
  { path: 'report/:id_student', component: ReportComponent, canActivate: [AuthGuard] },
  { path: 'noreport/:id_student', component: NoReportComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
