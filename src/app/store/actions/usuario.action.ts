import { Usuario } from './../../models/usuario.model';
import { createAction, props } from '@ngrx/store';

export const loadUser = createAction(
  '[Usuario] Carregr Usuário',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[Usuario] Carregar Usuário Sucesso',
  props<{ usuario: Usuario }>()
);

export const loadUserError = createAction(
  '[Usuario] Carregar Usuário Error',
  props<{ payload: any }>()
);
