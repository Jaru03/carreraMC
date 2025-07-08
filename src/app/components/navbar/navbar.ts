import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, MessageService } from 'primeng/api';
import { Button, ButtonModule } from "primeng/button";
import { RouterModule } from '@angular/router';
import { Dialog } from 'primeng/dialog';
import { FloatLabel } from "primeng/floatlabel";
import { FormsModule } from '@angular/forms';
import { Toast } from "primeng/toast";


@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, BadgeModule, AvatarModule, CommonModule, Button, RouterModule, Dialog, FloatLabel, FormsModule, Toast],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  providers:[MessageService]
})
export class Navbar {

  nombre = ''
  apellido = ''
  phone = ''
  dni = ''
  tallaCamiseta = ''

  items: MenuItem[] = [
    { label: 'Inicio', routerLink: '/' },
    { label: 'Información', routerLink: '/informacion' }
  ];
  visible: boolean = false;

  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Inscrito', detail: 'Inscripción realizada con Exito!' });
  }

  show() {
    this.visible = true;
  }
}
