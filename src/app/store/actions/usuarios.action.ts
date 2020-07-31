import { Usuario } from './../../models/usuario.model';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[Usuarios] Carregr Usuários');

export const loadUsersSuccess = createAction(
  '[Usuarios] Carregr Usuários Sucesso',
  props<{ usuarios: Usuario[] }>()
);

export const loadUsersError = createAction(
  '[Usuarios] Carregar Usuários Error',
  props<{ payload: any }>()
);
