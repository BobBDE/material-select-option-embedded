import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  notWorking: string;
  working: string;
  final: string;

  formGp: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formGp = this.formBuilder.group({
      accessibility: [null, Validators.required]
    });
  }

  submit(): void {
    console.log(this.formGp);
  }

}
