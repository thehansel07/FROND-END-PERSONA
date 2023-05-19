import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../persona';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id!: number;
  persona!: Persona;
  form!: FormGroup;

  idPersona!: number;
  nombre!: string;
  fechaNacimiento!: Date;

  constructor(
    public personaService: PersonaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPersona'];
    this.personaService.find(this.id).subscribe((data: Persona)=>{
      this.idPersona = data.idPersona;
      this.nombre = data.nombre;
      console.log(data);
      this.persona = data;
    });

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.personaService
      .update(this.id, this.form.value)
      .subscribe((res: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Persona Editado Correctamente!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('persona/index');
      });
  }
}
