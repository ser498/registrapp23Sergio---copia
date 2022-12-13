import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {


  constructor(private router:Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  onClick()
  {
    this.presentAlert();
    this.router.navigate (['/asistencias'])
    //hacer aparecer la alerta
   
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Asistencia Registrada',
      subHeader: 'PGY4121-003D |17/11/2022 |15:11-17:20 |E307 ',
      buttons: ['YES'],
    });

    await alert.present();
  }

}
