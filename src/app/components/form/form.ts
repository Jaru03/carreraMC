import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form',
  imports: [InputTextModule, FormsModule, FloatLabelModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  value3 = ''
}
