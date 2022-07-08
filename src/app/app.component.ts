import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateform';
  model: Login;
  constructor()
  {
    this.model=new Login('a@gmail.com','1234',true);
  }
  onSubmit(loginform: { value: any; status: any; })
  {
    console.log(loginform.value);
    console.log(loginform.status);
      
  }

  newLogin()
  {
    this.model=new Login("","",false);
  }
}
