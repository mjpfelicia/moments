import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderMomentsComponent } from './component/header-moments/header-moments.component';
import { FooterComponent } from './component/footer-moments/footer.component';
import { MeuMomentsComponent } from './pages/new-moments/meu-moments.component';
import { MomentFormComponent } from './component/moment-form/moment-form.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagenComponent } from './component/messagen/messagen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMomentsComponent,
    FooterComponent,
    MeuMomentsComponent,
    MomentFormComponent,
    AboutComponent,
    HomeComponent,
    MessagenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
