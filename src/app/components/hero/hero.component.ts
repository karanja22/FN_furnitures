import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { ContactsComponent } from './contacts/contacts.component';


@Component({
  selector: 'app-hero',
  imports: [HomeComponent,AboutComponent,ProductsComponent,OrderComponent,ContactsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
