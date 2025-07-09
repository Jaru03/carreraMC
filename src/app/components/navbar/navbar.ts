import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { MenuItem, MessageService } from 'primeng/api';
import { Button, ButtonModule } from "primeng/button";
import { Router, RouterModule } from '@angular/router';
import { Dialog } from 'primeng/dialog';
import { FloatLabel } from "primeng/floatlabel";
import { FormsModule } from '@angular/forms';
import { Toast } from "primeng/toast";
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-navbar',
  imports: [Menubar, InputTextModule, BadgeModule, AvatarModule, CommonModule, Button, RouterModule, Dialog, FloatLabel, FormsModule, Toast],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  providers: [MessageService]
})
export class Navbar implements OnInit {

  nombre: string | undefined
  apellido: string | undefined
  phone: string | undefined
  dni: string | undefined
  tallaCamiseta: string | undefined

  items: MenuItem[] | undefined;
  visible: boolean = false;

  constructor(private messageService: MessageService, private router: Router) { }
  ngOnInit(): void {
  this.items = [
    {
      label: 'Inicio',
      command: () => {
        this.router.navigate(['/']);
      }
    },
    {
      label: 'Información',
      command: () => {
        const section = document.getElementById('informacion');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  ];
}


  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Inscrito', detail: 'Inscripción realizada con Exito!' });
  }

  show() {
    this.visible = true;
  }
}
