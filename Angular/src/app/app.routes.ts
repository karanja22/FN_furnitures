import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DefaultComponent } from './layouts/default/default.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
    {
        path: "",
        component: DefaultComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'products', component: ProductsComponent },
            {path:"orders",component:OrderComponent},
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactsComponent },]
    },
   { path: '**', redirectTo: '' }// Example of a route with a different component
];
