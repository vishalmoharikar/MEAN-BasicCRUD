import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private http = inject(HttpClient);
  private postUrl = 'http://localhost:3000/api/create-task';
  private deleteUrl = 'http://localhost:3000/api/delete-task';


  addTask(title: string) {
    return this.http.post(this.postUrl, { title, status: 'Pending' });
  }

  deleteTask(taskId: string) {
    const url = `${this.deleteUrl}/${taskId}`;
    return this.http.delete(url);
  }


}
