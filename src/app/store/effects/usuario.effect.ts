import { UsuarioService } from './../../services/usuario.service';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadUser, loadUserSuccess, loadUserError } from '../actions';

@Injectable()
export class UsuarioEffects {
  constructor(private actions$: Actions, private userS: UsuarioService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap((action) =>
        this.userS.getUserById(action.id).pipe(
          map((user) => loadUserSuccess({ usuario: user })),
          catchError((err) => of(loadUserError({ payload: err })))
        )
      )
    )
  );
}
