import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from '../../interfaces/usuario';
import { Cursos, RegistroAsist } from '../../interfaces/registro-asist';

@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.page.html',
  styleUrls: ['./scanner-qr.page.scss'],
})
export class ScannerQrPage implements OnInit {
  nombreCur: string = '';
  nombreAlumno!: string;
  cursoEstudiante: any = {
    cursos: [],
    nombre: ''
  };

  constructor(
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private router: Router,
    private barcodeScanner: BarcodeScanner
  ) { }



  async ngOnInit() {
    await this.storage.get('activeUser').then((val) => {
      this.nombreAlumno = val;
    });
    await this.getCourses();
    console.log(this.cursoEstudiante);
  }
  async getCourses(){
    await this.storage.get('cursos').then((val) => {
      console.log(val);
      val.forEach((element: { nombre: string; }) => {
        if(element.nombre === this.nombreAlumno){
          this.cursoEstudiante = element;
          console.log(this.cursoEstudiante);
        }else{
          this.cursoEstudiante = {
            cursos: [],
            nombre: this.nombreAlumno
          }
          this.storage.set('cursos', this.cursoEstudiante);
        }
    });
  });
}


  ionViewWillLeave(){
    console.log('ionwillleave');
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'cargando...',
      duration: 2000
    });
    await loading.present();
  }

  async test(){
    /*this.barcodeScanner.scan().then(barcodeData => {
      this.nombreCur = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });*/
    this.nombreCur = 'Matenaticas' + Math.floor(Math.random() * 10);
    if(this.nombreCur.length >= 5){
      if(this.cursoEstudiante.cursos.length === 0){
        let registro: RegistroAsist = {
          nombreCurso: this.nombreCur,
          fecha: [new Date()],
          asistencia: 1,
          seccion: 'A'
        }
        this.cursoEstudiante.cursos.push(registro);
        this.cursoEstudiante.nombre = this.nombreAlumno;
      }else{
        for(let i = 0; i < this.cursoEstudiante.cursos.length; i++){
          if(this.cursoEstudiante.cursos[i].nombreCurso === this.nombreCur){
            this.cursoEstudiante.cursos[i].asistencia === this.cursoEstudiante.cursos[i].asistencia + 1;
            this.cursoEstudiante.cursos[i].fecha.push(new Date());
            break
          }else if (this.cursoEstudiante.cursos[i].nombreCurso !== this.nombreCur && i === this.cursoEstudiante.cursos.length - 1){
            console.log('No existe el curso');
            let registro: RegistroAsist = {
              nombreCurso: this.nombreCur,
              fecha: [new Date()],
              asistencia: 1,
              seccion: 'A'
            }
            this.cursoEstudiante.cursos.push(registro);
            break;
          }
        }
      }
      this.storage.set('cursos', this.cursoEstudiante);
      console.log(this.cursoEstudiante);         
    }
  }
}

//this.nombreCur = Math.round(Math.random() * 10) + '';