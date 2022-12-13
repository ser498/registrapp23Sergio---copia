import { DataserviceService } from './../../services/dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:Usuario={
    name: '',
    lastname: '',
    mail: '',
    password: '',
  }

  constructor(private router:Router,private serviciodatos:DataserviceService) {}

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/home'])
  }

  onSubmit(){
    this.serviciodatos.registrarUsuario(this.usuario.mail,this.usuario.password)
    console.log("Datos desde formulario");
    console.log(this.usuario);
    this.usuario.mail='';
    this.usuario.password='';
  }
}
