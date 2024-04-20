import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Online Store";



}
