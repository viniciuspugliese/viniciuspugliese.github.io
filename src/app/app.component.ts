import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./_components/header/header.component";
import {FooterComponent} from "./_components/footer/footer.component";
import {PerfilComponent} from "./_components/perfil/perfil.component";
import {NavComponent} from "./_components/nav/nav.component";

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [
        NgOptimizedImage,
        RouterLink,
        RouterOutlet,
        RouterLinkActive,
        HeaderComponent,
        FooterComponent,
        PerfilComponent,
        NavComponent
    ],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public ngOnInit(): void {
    }
}
