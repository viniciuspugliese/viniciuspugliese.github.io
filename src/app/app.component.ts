import {Component, inject, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./_components/header/header.component";
import {FooterComponent} from "./_components/footer/footer.component";
import {PerfilComponent} from "./_components/perfil/perfil.component";
import {NavComponent} from "./_components/nav/nav.component";
import {ThemeService} from "./shared/services/theme.service";

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

    private themeService: ThemeService = inject(ThemeService);

    public theme: string;

    public ngOnInit(): void {
        this.getTheme();
    }

    private getTheme(): void {
        this.themeService.getTheme().subscribe(value => this.theme = value);
    }
}
