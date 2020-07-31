import { UsuarioService } from './../../services/usuario.service';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersError,
} from './../actions/usuarios.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  /**
   * Observable que ouve todas as ações do store
   * @param actions$
   */
  constructor(private actions$: Actions, private userS: UsuarioService) {}

  /**
   * Os effects sempre devem retornar uma nova ação, para alterar o estado
   * do store
   */
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      // tap espera efeitos secundários
      // tap((data) => console.log('effect tap', data)),
      /**
       * Dispara um novo observable e mescla com o anterior
       */
      mergeMap(() =>
        this.userS.getUsers().pipe(
          // tap((data) => console.log('getUsers effect', data)),
          /**
           * Assim que recebe os dados, dispara a ação de 'Usuários carregados'
           * operador of transforma o retorno em um observable
           */
          map((usuarios) => loadUsersSuccess({ usuarios })),
          catchError((err) => of(loadUsersError({ payload: err })))
        )
      )
    )
  );
}
