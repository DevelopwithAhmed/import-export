import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductsComponent } from '../products/products.component';
import { ServicesComponent } from '../services/services.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { MangoComponent } from '../products/products/mango/mango.component';
import { OrangeComponent } from '../products/products/orange/orange.component';
import { GuavaComponent } from '../products/products/guava/guava.component';
import { OnionComponent } from '../products/products/onion/onion.component';
import { PotatoComponent } from '../products/products/potato/potato.component';
import { CornComponent } from '../products/products/corn/corn.component';
import { BedroomComponent } from '../products/products/bedroom/bedroom.component';
import { KitchenComponent } from '../products/products/kitchen/kitchen.component';
import { MuttonComponent } from '../products/products/mutton/mutton.component';
import { BeefComponent } from '../products/products/beef/beef.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  {path: 'about', component: AboutComponent},
  {path:'products/mango', component: MangoComponent},
  {path:'products/orange', component: OrangeComponent},
  {path:'products/guava', component: GuavaComponent},
  {path:'products/onion', component: OnionComponent},
  {path:'products/potato', component: PotatoComponent},
  {path:'products/corn', component: CornComponent},
  {path:'products/bedroom', component: BedroomComponent},
  {path:'products/mutton', component: MuttonComponent},
  {path:'products/beef', component: BeefComponent},
  {path:'products/kitchen', component: KitchenComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
