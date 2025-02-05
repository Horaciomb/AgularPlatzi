import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-labs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Que dice Angular';
  tasks = signal(['Instalar Angular', 'Regar las plantas', 'Leer el libro']);
  name = signal('Horacio');
  disabled = true;
  person = signal({
    name: 'Horacio',
    lastname: 'Molina',
    edad: 24,
    img: 'https://i.imgur.com/Yxbw7Ui.jpeg',
  });
  clickHandler() {
    alert('Hola');
  }
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
    console.log(event);
  }
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        name: newValue,
      };
    });
  }
  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        edad: parseInt(newValue, 10),
      };
    });
  }
  colorCtrl = new FormControl();
  constructor() {
    this.colorCtrl.valueChanges.subscribe((value) => {
      //console.log(value)
    });
  }
  widthCtrl = new FormControl(50, {
    nonNullable: true,
  });
  nameCtrl= new FormControl('hola',{
    nonNullable: true,
    validators:[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]
  });
}
