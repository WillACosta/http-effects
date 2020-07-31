import {
  loadUser,
  loadUserSuccess,
  loadUserError,
} from './../actions/usuario.action';
import { Usuario } from './../../models/usuario.model';
import { createReducer, on } from '@ngrx/store';

export interface UsuarioState {
  id: string;
  user: Usuario; //Array de usuários
  loaded: boolean; // Carregado?
  loading: boolean; // Carregando?
  error: any; //Errors?
}

export const usuarioInitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _usuarioReducer = createReducer(
  usuarioInitialState,
  on(loadUser, (state, { id }) => ({ ...state, loading: true, id: id })),
  /**
   * Ao trabalhar com os effects, criamos ações que "esperam os efeitos colaterais" dos disparos
   * ex.: Quando a ação de 'Carregamento com sucesso' for disparada o reducer irá alterar o estado
   * com os seguintes parametros
   */
  on(loadUserSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario },
  })),
  on(loadUserError, (state, { payload }) => ({
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

export function usuarioReducer(state, action) {
  return _usuarioReducer(state, action);
}
