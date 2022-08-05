import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { QuaTangComponent } from './components/qua-tang/qua-tang.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'qua-tang', component: QuaTangComponent},
  { path: 'user', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
