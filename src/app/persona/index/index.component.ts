import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  personas: Persona[] = [];

  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getAll().subscribe((data: Persona[]) => {
      this.personas = data;
      console.log(this.personas);
    });
  }

  deletePersona(id: number) {
    if (id != null) {
      Swal.fire({
        title: 'Esta seguro que deseas eliminar este regitro?',
        text: 'Los cambios no podran ser revertidos!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borra lo!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.personaService.delete(id).subscribe((res) => {
            this.personas = this.personas.filter(
              (item) => item.idPersona !== id
            );
          });
          Swal.fire('Deleted!', 'Persona Eliminada Correctamente.', 'success');
        }
      });
    }
  }
}
