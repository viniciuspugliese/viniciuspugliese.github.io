import {Routes} from '@angular/router';
import {ContactComponent} from "./pages/contact/contact.component";
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'about'},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];
