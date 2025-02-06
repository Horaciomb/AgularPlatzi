import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
const noWhitespaceValidator = (control: AbstractControl) => {
  const hasWhitespace = /\s/.test(control.value);
  return hasWhitespace ? { hasWhitespace: true } : null;
};
@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  filter = signal('all');
  tasksByFilter = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks();
    if (filter === 'pending') {
      return tasks.filter((tasks) => !tasks.completed);
    }
    if (filter === 'completed') {
      return tasks.filter((tasks) => tasks.completed);
    }
    return tasks;
  });
  tasks = signal<Task[]>([
    { id: Date.now(), title: 'Instalar Angular', completed: false },
    { id: Date.now(), title: 'Regar las plantas', completed: true },
    { id: Date.now(), title: 'Leer el libro', completed: false },
    { id: Date.now(), title: 'Hacer ejercicio', completed: true },
    { id: Date.now(), title: 'Limpiar la casa', completed: false },
    { id: Date.now(), title: 'Preparar la cena', completed: false },
    { id: Date.now(), title: 'Estudiar JavaScript', completed: true },
  ]);
  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      // noWhitespaceValidator // 👈 Validador personalizado
    ],
  });
  changeHandler() {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value.trim();
      if (value !== '') {
        this.addTask(value);
        this.newTaskCtrl.setValue('');
      }
    }
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
  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  }
  deleteTask(index: number) {
    this.tasks.update((tasks) =>
      tasks.filter((task, position) => position !== index)
    );
  }
  updateTaskEditingMode(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            editing: true,
          };
        }
        return {
          ...task,
          editing: false,
        };
      });
    });
  }
  updateTaskText(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            title: input.value,
            editing: false,
          };
        }
        return task;
      });
    });
  }
  changeFilter(filter: string) {
    this.filter.set(filter);
  }
}
