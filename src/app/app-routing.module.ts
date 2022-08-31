import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuMomentsComponent } from './pages/new-moments/meu-moments.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component:AboutComponent},
  { path: 'moments/new', component: MeuMomentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
