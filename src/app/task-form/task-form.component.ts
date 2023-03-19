import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../task/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() addTask = new EventEmitter<Task>();

  formGroup: FormGroup;
  isValid = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['Sleep during the night'],
      type: ['private'],
      progress: ['25'],

    });

    this.formGroup.valueChanges.subscribe(() => (this.isValid = this.formGroup.valid));
  }


  submit() {
    if (this.formGroup.valid) {
      this.addTask.emit(this.formGroup.value);
    } else {
      console.log('not valid');
    }
  }
}
