import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multiple-input',
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.css']
})
export class MultipleInputComponent {

  multiFormGroup = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl('')
  })
}
