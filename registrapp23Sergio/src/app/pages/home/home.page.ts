import { DataserviceService } from './../../services/dataservice.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 usuario:Usuario={
    name: '',
    lastname: '',
    mail:'',
    password:'',
 }
 

  constructor(private router:Router, private srv:DataserviceService,private alertController: AlertController) {}

  onSubmit()
  {
    this.srv.inicioSesion(this.usuario).then(res=>{
      console.log("Dentro de la promesa" + res);
      if(res)
      {
       
          this.router.navigate(['/inicio'])
      }
      else{
        this.presentAlert()
      }

    }).catch(err=>
      {
        console.log(err);
      }
    );
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario no Existe',
      subHeader: '',
      message: 'Debe crear una cuenta de usuario primero',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
