import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-profile';

  scrollToContent(): void {
    console.log('Button clicked');
    const contentElement = document.getElementById('about');
    console.log(contentElement);
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
