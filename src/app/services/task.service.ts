import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl: string = 'http://localhost:5000';
  private taskUrl: string = `${this.baseUrl}/tasks`;

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteTaskUrl: string = `${this.taskUrl}/${task.id}`;
    return this.http.delete<Task>(deleteTaskUrl);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.taskUrl}/${task.id}`, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskUrl, task, httpOptions);
  }
}
