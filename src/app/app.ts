import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SegundoComponente } from './segundo-componente/segundo-componente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SegundoComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fundamentos-angula');
}
