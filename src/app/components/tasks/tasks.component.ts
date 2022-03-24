import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(taskToDelete: Task) {
    this.taskService
      .deleteTask(taskToDelete)
      .subscribe(() => this.tasks = this.tasks.filter(task => task.id !== taskToDelete.id));
  }

  toggleReminder(taskToToggle: Task) {
    taskToToggle.reminder = !taskToToggle.reminder;
    this.taskService.updateTask(taskToToggle).subscribe();
  }

  addTask(newTask: Task) {
    this.taskService.addTask(newTask).subscribe((task) => this.tasks.push(task));
  }

}
