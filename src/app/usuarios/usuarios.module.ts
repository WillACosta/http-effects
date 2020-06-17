import { UsuarioComponent } from './usuario/usuario.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent, UsuarioComponent],
  imports: [CommonModule],
  exports: [ListComponent, UsuarioComponent],
})
export class UsuariosModule {}
