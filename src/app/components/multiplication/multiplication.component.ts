import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.scss']
})

export class MultiplicationComponent implements OnInit {

  form: FormGroup;
  fixedValues: number;
  sequence: Array<number> = [];
  result: Array<number> = [];
  display: boolean = false;
  multiplication: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.multiplications();
    this.formValue();
  }

  formValue() {
    this.form = this.formBuilder.group({
      multiplication: [null, Validators.required]
    });
  }

  getFormControl() {
    return this.form.controls;
  }

  multiplications() {
    for (let i = 1; i <= 10; i++) {
      this.fixedValues = i;
      this.sequence.push(this.fixedValues);
    }
  }

  calcResult() {
    this.multiplication = this.getFormControl()['multiplication'].value
    if (!this.form.valid) {
      alert('Digite um número!')
    } else {
      this.display = true;
      this.result = this.sequence.map(element => element * Number(this.multiplication));
      this.form.reset();
      this.onDisplay();
    }
  };

  onDisplay() {
    if (this.form.touched) {
      this.display = false;
    }
  }

}
