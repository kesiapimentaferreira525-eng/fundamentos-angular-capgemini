import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segundo-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segundo-componente.html',
  styleUrls: ['./segundo-componente.css']
})
export class SegundoComponente {
  pessoa: Pessoa = {
    nome: 'Kesia',
    dataNascimento: new Date(2000, 0, 1),
    urlImagem: '/assets/foto-kesia.jpg'
  };

  mostrarDataNascimento(): void {
    alert(this.pessoa.dataNascimento.toLocaleDateString());
  }
} 
export interface Pessoa {
  nome: string;
  dataNascimento: Date;
  urlImagem: string;
}