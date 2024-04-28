import {Routes} from '@angular/router';
import {ContactComponent} from "./pages/contact/contact.component";
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];
