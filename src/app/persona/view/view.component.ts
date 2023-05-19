import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../persona';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  persona!: Persona;

  constructor(
    public personaService: PersonaService,
    private route: ActivatedRoute,
    private router: Router
   ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPersona'];

    this.personaService.find(this.id).subscribe((data: Persona)=>{
      this.persona = data;
    });
  }

}
