import { Component, importProvidersFrom } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { FooterComponent } from './components/partials/footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, FooterComponent],
  providers: [],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-project';
}
