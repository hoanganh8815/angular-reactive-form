import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent {

  email = new FormControl('');

  changeValue(){
    this.email.setValue("nhanh36@gmail.com");
  }
}
