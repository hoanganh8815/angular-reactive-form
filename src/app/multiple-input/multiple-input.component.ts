import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multiple-input',
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.css'],
})
export class MultipleInputComponent {
  multiFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onSubmit() {
    console.warn(this.multiFormGroup.value);
  }

  updateProfile(){
    this.multiFormGroup.patchValue({
      firstName: 'Nancy',
      address:{
        street: '1123 Drew Street'
      }
    })
  }
}
