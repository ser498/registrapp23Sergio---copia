import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  usuario:Usuario={
    name: '',
    lastname: '',
    mail: '',
    password: '',
  }

  constructor(private storage:Storage) { }

  //registrar un usuario
  async registrarUsuario(mail:string,pass:string)
  {
    this.usuario.mail=mail;
    this.usuario.password=pass;

    await this.storage.set(mail,this.usuario)
    console.log("Resulto");
    console.log(this.usuario);
  }


  //login
  async inicioSesion(usr:Usuario)
  {
    let sesion=await this.storage.get(usr.mail)
    if (sesion!=null)
    {
      console.log("Usuario conectado" + JSON.stringify(sesion));
      await this.storage.set("sesion",usr.mail);
      return true;
    }
    //alerta de que el usuario no existe
    return false;
  }

}
