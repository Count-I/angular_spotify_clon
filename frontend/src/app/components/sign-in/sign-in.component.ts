import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {

  form: FormGroup;
  selected = "col";
  country= "+57 Colombia";

  constructor(
    private fb : FormBuilder,
    private authService: AuthService,
    private contactService: ContactService
  ){
    this.form = this.fb.group({
      phone:[''],
      password:[''],
    })
  }


  login(){
    const { phone, password } = this.form.value;
    const user = {
      phone,
      password,
    }
    this.authService.login(user);
  }
}
