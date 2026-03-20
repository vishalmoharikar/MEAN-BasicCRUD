import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/create-task';

  addTask(title: string) {
    return this.http.post(this.apiUrl, { title, status: 'Pending' });
  }
}
