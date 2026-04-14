import { Component } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-segundo-componente',
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './segundo-componente.html',
  styleUrl: './segundo-componente.css',
})
export class SegundoComponente {
  nome = 'Kesia';
  dataNascimento = new Date('1992-10-30');
}
