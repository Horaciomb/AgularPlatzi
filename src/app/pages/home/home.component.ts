import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal<Task[]>([
    { id: Date.now(), title: 'Instalar Angular', completed: false },
    { id: Date.now(), title: 'Regar las plantas', completed: true },
    { id: Date.now(), title: 'Leer el libro', completed: false },
    { id: Date.now(), title: 'Hacer ejercicio', completed: true },
    { id: Date.now(), title: 'Limpiar la casa', completed: false },
    { id: Date.now(), title: 'Preparar la cena', completed: false },
    { id: Date.now(), title: 'Estudiar JavaScript', completed: true },
  ]);
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTasks = input.value;
    this.addTask(newTasks);
    
  }
  toggleChecked(index: number) {
    this.tasks.update((value) =>
      value.map((task, position) => {
        if (position === index)
          return {
            ...task,
            completed: !task.completed,
          };
        return task;
      })
    );
  }
  addTask(title: string){
    const newTask={
      id:Date.now(),
      title:title,
      completed:false
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  deleteTask(index: number) {
    this.tasks.update((tasks) =>
      tasks.filter((task, position) => position !== index)
    );
  }
}
