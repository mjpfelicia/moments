import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Sandra";
  
  userDate = {
    email: "sandra@gmail.com",
    role: "admin",
  }

  title = 'curso-angula';
}
