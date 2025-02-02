import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  welcome = 'Que dice Angular';
  tasks=[
    'Instalar Angular',
    'Regar las plantas',
    'Leer el libro'
  ];
}
