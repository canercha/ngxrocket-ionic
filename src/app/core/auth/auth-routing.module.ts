import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent, data: { title: marker('Auth.Title') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule { }
