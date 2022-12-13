import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/detalle'])
  }
}
