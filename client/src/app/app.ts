import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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

  ngOnInit() {
    this.http.get('http://localhost:3000/api/first-task')
      .subscribe({
        next: (res) => {
          this.data.set(res); // 3. Use .set() to update the value
        },
        error: (err) => console.error('Connection failed. Is Node running?', err)
      });

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
      this.tasks.update(prev => [...prev, res]); // Update UI list
      this.newTaskTitle = ''; // Clear input
    });
  }
}