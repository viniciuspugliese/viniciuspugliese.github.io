import {Routes} from '@angular/router';
import {ContactComponent} from "./pages/contact/contact.component";
import {AboutComponent} from "./pages/about/about.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {SkillsComponent} from "./pages/skills/skills.component";
import {ResumeComponent} from "./pages/resume/resume.component";

export const routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'works', component: PortfolioComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'contact', component: ContactComponent},
];
