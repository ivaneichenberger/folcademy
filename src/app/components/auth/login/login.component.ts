import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  misDatos = {
    email: 'ivaneich@gmail.com',
    password: '1234',
  }

constructor(private formBuilder: FormBuilder, private router: Router){

}
loginFormGroup: FormGroup = this.formBuilder.group({
  email: ['ivaneich@gmail.com',[Validators.email]],
  password: ['1234', [Validators.minLength(3), Validators.maxLength(5)]]
})

leerDatos() {
  console.log(this.loginFormGroup)
  if(this.loginFormGroup.value.email === this.misDatos.email && this.loginFormGroup.value.password === this.misDatos.password){
    alert('coincide')
    this.router.navigate(['/home'])
  }
  else{
    alert('no coincide')
  }
}
}