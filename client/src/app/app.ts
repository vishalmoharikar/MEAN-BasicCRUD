import { Component, inject, OnInit, signal, provideZonelessChangeDetection, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, JsonPipe } from '@angular/common';
import { TaskService } from './services/task-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html', // This points to your app.html file
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  data = signal<any>(null);
  disableAddButton: boolean = false;
  disableUpdateButton: boolean = true;
  taskToUpdate: any = undefined;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllTasks()
  }

  private getFirstTask() {
    this.http.get('http://localhost:3000/api/first-task')
      .subscribe({
        next: (res) => {
          this.data.set(res); // 3. Use .set() to update the value
        },
        error: (err) => console.error('Connection failed. Is Node running?', err)
      });
  }

  private getAllTasks() {
    this.http.get('http://localhost:3000/api/get-all-tasks')
      .subscribe({
        next: (res) => {
          console.table(res);
          this.data.set(res); // 3. Use .set() to update the value
        },
        error: (err) => console.error('Connection failed. Is Node running?', err)
      });
  }
  taskService = inject(TaskService);

  newTaskTitle = '';
  tasks = signal<any[]>([]);

  saveTask() {
    if (!this.newTaskTitle) return;
    this.taskService.addTask(this.newTaskTitle).subscribe((res: any) => {
      this.getAllTasks()
      this.newTaskTitle = ''; // Clear input
    });
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId).subscribe((res: any) => {
      this.getAllTasks()
      this.newTaskTitle = ''; // Clear input
    });
  }

  test(task: any) {
    this.disableUpdateButton = false;
    this.disableAddButton = true;
    this.newTaskTitle = task.title
    this.taskToUpdate = task;
  }

  updateTask() {
    let clonedTask = JSON.parse(JSON.stringify(this.taskToUpdate))
    clonedTask.title = this.newTaskTitle;
    this.taskService.updateTask(clonedTask).subscribe((res: any) => {
      this.getAllTasks()
      this.cancelUpdateTask()
    });
  }

  cancelUpdateTask() {
    this.newTaskTitle = "";
    this.taskToUpdate = undefined;
    this.disableAddButton = false;
    this.disableUpdateButton = true;

  }
}