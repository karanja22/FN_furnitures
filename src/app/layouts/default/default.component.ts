import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/partials/footer/footer.component';
import { NavbarComponent } from '../../components/partials/navbar/navbar.component';

@Component({
  selector: 'app-default',
  imports: [NavbarComponent, FooterComponent,RouterOutlet],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {

}
