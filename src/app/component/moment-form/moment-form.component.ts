import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() btnText!: string;
  momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')

    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }
  get description() {
    return this.momentForm.get('description')!;
  }
  // get image() {
  //   return this.momentForm.get('image')!;
  // }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    this.momentForm.patchValue({ image: file });
    console.log({ file })

  }

  submit() {
    console.log({ valid: this.momentForm.valid });
    console.log(this.momentForm.value)

    if (!this.momentForm.valid) {
      return;
    }
    
    this.onSubmit.emit(this.momentForm.value);
  }

}
