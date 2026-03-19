import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
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
          console.log('Success!', res);
          console.table(res);
          this.data.set(res); // 3. Use .set() to update the value
        },
        error: (err) => console.error('Connection failed. Is Node running?', err)
      });
  }
}