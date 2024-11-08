import { Component } from '@angular/core';
import { ButtcopyComponent } from "../../botones/buttcopy/buttcopy.component";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtcopyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  email = "jhoannegd@gmail.com"; // Correo electrónico predefinido
  mensajeCopia = '';              // Variable para el mensaje de confirmación

  copiarCorreo() {
    const textarea = document.createElement('textarea');
    textarea.value = this.email;
    document.body.appendChild(textarea);

    // Seleccionar y copiar el texto
    textarea.select();

    // Remover el elemento temporal
    document.body.removeChild(textarea);

    // Mostrar el mensaje de confirmación
    this.mensajeCopia = '¡Correo copiado!';
    
    setTimeout(() => {
      this.mensajeCopia = ''; // Oculta el mensaje después de 2 segundos
    }, 2000);
  }

}
