import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-multiple-input',
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.css'],
})
export class MultipleInputComponent {
  constructor(private fb: FormBuilder) {}
  multiFormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  // new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });

  onSubmit() {
    console.warn(this.multiFormGroup.value);
  }

  updateProfile() {
    this.multiFormGroup.patchValue({
      firstName: 'Nancy',
      address: {
        street: '1123 Drew Street',
      },
    });
  }
}
