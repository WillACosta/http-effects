import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  usersData: Usuario[];

  constructor(public userS: UsuarioService) {}

  ngOnInit(): void {
    this.userS.getUsers().subscribe((data) => {
      this.usersData = data;
    });
  }
}
