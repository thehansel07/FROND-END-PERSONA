import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(public personaService: PersonaService, private router: Router) {}

  ngOnInit(): void {
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
    this.personaService.create(this.form.value).subscribe((res: any) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario Creado Correctamente',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigateByUrl('persona/index');
    });
  }
}
