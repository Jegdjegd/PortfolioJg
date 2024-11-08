import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { StackComponent } from "./components/stack/stack.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { ExperienceComponent } from "./components/experience/experience.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AboutComponent, StackComponent, SummaryComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio Jhoann Guzmán';
}
