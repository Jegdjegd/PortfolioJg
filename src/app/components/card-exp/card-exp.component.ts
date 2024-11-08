import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';



@Component({
  selector: 'app-card-exp',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],  
  templateUrl: './card-exp.component.html',
  styleUrl: './card-exp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardExpComponent {
  westerosText = `Es un mundo donde tienes al alcance toda la información respecto a la famosa serie "Game of thrones", sus precuelas y secuelas, incluso encontraras algún dragón volando por el sitio. Se encarga de realizar consultas a 2(dos) API'S distintas para obtener toda la información. Desarrollado usando:`;
  
  btfxText = `La función del sitio es que permita a diferentes organismos de competición para ciclistas, tener acceso a un sistema, facil e intuitivo, donde poder inscribirse en pruebas ciclistas de todo tipo y que además, deje ver clasificaciones de todos los competidores registrados. Desarrollado usando: `;
  
  cotcripText = `Una SPA para obtener la información de las criptomonedas más buscadas en pocos clicks, usando la API de cryptocompare.com`;
}
