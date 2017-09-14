import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    items: FirebaseListObservable<any[]>;
    user: Observable<firebase.User>;
    usuario:string;
    contrasena:string;
    constructor(db: AngularFireDatabase,public afAuth: AngularFireAuth,  private router: Router) {
        this.items = db.list('/lista');
        this.user = afAuth.authState;
    }
    
    ngOnInit() {
        
    }
    iniciarSesion(){
        this.afAuth.auth.signInWithEmailAndPassword(this.usuario,this.contrasena);
        localStorage.setItem('isLoggedin', 'true');                
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'false');        
    }

}
