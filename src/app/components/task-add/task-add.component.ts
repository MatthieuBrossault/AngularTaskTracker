import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  text: string | undefined;
  day: string | undefined;
  reminder: boolean = false;
  showAddForm: boolean = false;
  subscription: Subscription = new Subscription();

  @Output() onAddEvent: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((val) => this.showAddForm = val)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a label');
      return;
    }

    if (!this.day) {
      alert('Please add a Date & Time');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddEvent.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
