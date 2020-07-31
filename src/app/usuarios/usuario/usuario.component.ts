import { Usuario } from './../../models/usuario.model';
import { loadUser } from './../../store/actions/usuario.action';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('usuario').subscribe(({ user }) => {
      this.usuario = user;
    });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadUser({ id: id }));
    });
  }
}
