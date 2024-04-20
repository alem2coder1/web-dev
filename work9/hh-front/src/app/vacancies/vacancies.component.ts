import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForOf, NgIf} from "@angular/common";
@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})

export class VacanciesComponent implements OnInit {
  vacancies: any[] | undefined; // 假设您从 Django API 中接收的数据格式是一个对象数组

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCompanies();
  }

  fetchCompanies(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/api/vacancies/')
      .subscribe(
        (response) => {
          this.vacancies = response;
          console.log(this.vacancies); // 确保您收到了正确的数据
        },
        (error) => {
          console.error('Error fetching companies:', error);
        }
      );
  }
}
