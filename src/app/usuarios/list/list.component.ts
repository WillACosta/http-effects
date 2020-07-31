import { loadUsers } from './../../store/actions/usuarios.action';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  usersData: Usuario[] = [];
  isLoading: boolean = false;
  error: any;

  constructor(public userS: UsuarioService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usersData = users;
      this.isLoading = loading;
      this.error = error;
    });

    this.store.dispatch(loadUsers());

    // this.userS.getUsers().subscribe((data) => {
    //   this.usersData = data;
    // });
  }
}
