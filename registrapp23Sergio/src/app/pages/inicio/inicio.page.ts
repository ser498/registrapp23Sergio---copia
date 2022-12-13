import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(private router: Router, public navCtrl: NavController) { }


  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/scan'])
  }

  Asistencias()
  {
    this.router.navigate(['/asistencias'])
  }

  salir() {
    localStorage.removeItem('usuario');
    this.navCtrl.navigateRoot('home');
  }
}
