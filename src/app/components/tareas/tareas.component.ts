import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Tarea } from '../../models/Tarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  listTareas: Tarea[] = [];
  nombreTarea = '';

  constructor(){}

  agregarTarea(){
    //crea objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    console.log(this.nombreTarea);
    //agregar tarea al array
    this.listTareas.push(tarea);
    console.log(this.listTareas);
    //reseteamos form
    this.nombreTarea = '';
  }

  eliminarTarea(i:number): void{
    this.listTareas.splice(i, 1);
  }

  actualizarTarea(estado:boolean, i:number): void{
    this.listTareas[i].estado = !estado;
  }
}