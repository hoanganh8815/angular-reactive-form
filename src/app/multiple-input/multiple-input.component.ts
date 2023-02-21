import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

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

  get aliases(){
    return this.multiFormGroup.get('aliases') as FormArray;
  }

  onSubmit() {
    console.warn(this.multiFormGroup.value);
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }

  updateProfile() {
    this.multiFormGroup.patchValue({
      firstName: 'Nancy',
      address: {
        street: '1123 Drew Street',
        city: 'Los angeles'
      },
    });
  }
}
