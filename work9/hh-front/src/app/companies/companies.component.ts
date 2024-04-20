import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit {
  companies: any[] | undefined; // 假设您从 Django API 中接收的数据格式是一个对象数组

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCompanies();
  }

  fetchCompanies(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/api/companies/')
      .subscribe(
        (response) => {
          this.companies = response;
          console.log(this.companies); // 确保您收到了正确的数据
        },
        (error) => {
          console.error('Error fetching companies:', error);
        }
      );
  }
}
