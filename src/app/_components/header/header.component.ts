import {Component, inject, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ThemeService} from "../../shared/services/theme.service";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {MobileNavService} from "../../shared/services/mobile-nav.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        NgOptimizedImage,
        NavMobileComponent,
    ],
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    private router: Router = inject(Router);
    private mobileNavService: MobileNavService = inject(MobileNavService);
    private themeService: ThemeService = inject(ThemeService);

    public theme: string;

    public ngOnInit(): void {
        this.themeService.getTheme().subscribe((theme: string) => this.theme = theme);
    }

    public toggleShowMobileNav(): void {
        this.mobileNavService.toggle();
    }

    public changeTheme() {
        this.themeService.toggleTheme();
    }

    public goTo(to: string): void {
        this.router.navigate([to]);
    }
}
