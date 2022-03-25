import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  showAddForm: boolean = false;
  subscription: Subscription = new Subscription();

  @Output() onAddEvent: EventEmitter<Task> = new EventEmitter();

  addTaskForm: FormGroup = this.formBuilder.group({
    text: ["", Validators.required],
    day: ["", Validators.required],
    reminder: false
  });

  constructor(private uiService: UiService, private formBuilder: FormBuilder) {
    this.subscription = this.uiService.onToggle().subscribe((val) => this.showAddForm = val)
  }

  get text() {
    return this.addTaskForm.get("text");
  }

  get day() {
    return this.addTaskForm.get("day");
  }

  onSubmit(): void {
    this.onAddEvent.emit(this.addTaskForm.value);

    this.addTaskForm.reset();
  }

}
