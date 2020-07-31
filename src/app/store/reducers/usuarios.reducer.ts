import { Usuario } from './../../models/usuario.model';
import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';

export interface UsuariosState {
  users: Usuario[]; //Array de usuários
  loaded: boolean; // Carregado?
  loading: boolean; // Carregando?
  error: any; //Errors?
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usuariosReducer = createReducer(
  usuariosInitialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  /**
   * Ao trabalhar com os effects, criamos ações que "esperam os efeitos colaterais" dos disparos
   * ex.: Quando a ação de 'Carregamento com sucesso' for disparada o reducer irá alterar o estado
   * com os seguintes parametros
   */
  on(loadUsersSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios],
  })),
  on(loadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function usuariosReducer(state, action) {
  return _usuariosReducer(state, action);
}
