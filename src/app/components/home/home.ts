import { Component, OnInit } from '@angular/core';
import { NgIcon,  provideIcons } from '@ng-icons/core';
import { bootstrapCalendar2CheckFill, bootstrapClockFill, bootstrapFlagFill, bootstrapHeartFill, bootstrapMap } from "@ng-icons/bootstrap-icons"
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Timeline } from 'primeng/timeline';
import { Event } from '../../models/Event';
import { Footer } from "../footer/footer";
import { FloatLabel } from "primeng/floatlabel";
import { Toast } from 'primeng/toast';
import { Dialog } from "primeng/dialog";
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, TagModule, InputTextModule, ButtonModule, Timeline, NgIcon, Footer, FloatLabel, Dialog, FormsModule, Toast],
  providers: [
    provideIcons({
      bootstrapCalendar2CheckFill,
      bootstrapClockFill,
      bootstrapFlagFill,
      bootstrapHeartFill,
      bootstrapMap,
      
    }),
    MessageService
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{

  nombre : string | undefined
  apellido: string | undefined
  phone: string | undefined
  dni: string | undefined
  tallaCamiseta: string | undefined

  visible: boolean = false;

  show(){
    this.visible = true;
  }

  carrousel: string[] = ["1.jpg", "2.jpg", "3.webp"]
  responsiveOptions: any[] | undefined;
  events: Event[];

  showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Inscrito', detail: 'Inscripción realizada con Exito!' });
    }

    screenWidth!: number;

  ngOnInit() {
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize.bind(this));
  }

  updateScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  constructor(private messageService: MessageService) {
    this.events = [new Event("Fecha", "bootstrapCalendar2CheckFill", "2 de mayo de 2025"),
      new Event("Hora", "bootstrapClockFill", "10:00 AM"),
      new Event("Lugar", "bootstrapFlagFill", "Plaza del Dos de Mayo, Malasaña"),
      new Event("Causa", "bootstrapHeartFill", "Fundación Menudos Corazones"),
      new Event("Distancia", "bootstrapMap", " 1 km")
    ]
  }

}
