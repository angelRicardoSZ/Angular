import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmpleadosService } from './services/empleados/empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  empleadoForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public empleadosService: EmpleadosService,

  ){}
  ngOnInit(): void {
    this.empleadoForm = this.fb.group({
      //numero_empleado : ['', Validators.required],
      primer_apellido : ['', Validators.required],
      segundo_apellido :['', Validators.required],
      ciudad:['', Validators.required],
      sexo:['', Validators.required],
      centro:['', Validators.required],
      puesto:['', Validators.required],
      clave_interbancaria:['', Validators.required]
    })
  }

  guardar(): void{

  }


}
