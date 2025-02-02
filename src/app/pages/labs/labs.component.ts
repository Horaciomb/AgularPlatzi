import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Que dice Angular';
  tasks=[
    'Instalar Angular',
    'Regar las plantas',
    'Leer el libro'
  ];
  disabled=true;
  person={
    name:'Horacio',
    lastname:'Molina',
    edad:24,
    img:'https://i.imgur.com/Yxbw7Ui.jpeg'
  };
  clickHandler(){
    alert('Hola');
  };
  changeHandler(event: Event){
    console.log(event);
  }
}
