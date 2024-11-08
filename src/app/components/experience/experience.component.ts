import { Component } from '@angular/core';
import { CardExpComponent } from "../card-exp/card-exp.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CardExpComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
