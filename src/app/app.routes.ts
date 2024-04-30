import {Routes} from '@angular/router';
import {ContactComponent} from "./pages/contact/contact.component";
import {AboutComponent} from "./pages/about/about.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";

export const routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'works', component: PortfolioComponent},
];
