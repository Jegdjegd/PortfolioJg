import { Component } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';




@Component({
  selector: 'app-buttcopy',
  standalone: true,
  imports: [ClipboardModule],
  templateUrl: './buttcopy.component.html',
  styleUrl: './buttcopy.component.css'
})


export class ButtcopyComponent {
  value = "jhoannegd@gmail.com";
  
  copyText(){
    alert(`El email ${this.value} fue copiado exitosamente`)
  }
}
