import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Que dice Angular';
  tasks=signal([
    'Instalar Angular',
    'Regar las plantas',
    'Leer el libro'
  ]);
  name = signal('Horacio');
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
    const input= event.target as HTMLInputElement;
    const newValue= input.value;
    this.name.set(newValue )
    console.log(event);
  }
  keydownHandler(event:KeyboardEvent){
    const input=event.target as HTMLInputElement;
    console.log(input.value);
  }
}
