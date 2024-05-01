import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./_components/header/header.component";
import {FooterComponent} from "./_components/footer/footer.component";
import {ProfileComponent} from "./_components/profile/profile.component";
import {NavComponent} from "./_components/nav/nav.component";
import {ThemeService} from "./shared/services/theme.service";
import {DeviceDetectorService} from "ngx-device-detector";
import {filter} from "rxjs/operators";

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [
        NgOptimizedImage,
        RouterLink,
        RouterOutlet,
        CommonModule,
        HeaderComponent,
        FooterComponent,
        ProfileComponent,
        NavComponent
    ],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    private themeService: ThemeService = inject(ThemeService);
    private deviceService: DeviceDetectorService = inject(DeviceDetectorService);
    private router: Router = inject(Router);

    public isMobile: boolean = this.deviceService.isMobile();
    public isAboutRoute: boolean = true;

    public theme: string;

    public ngOnInit(): void {
        this.getTheme();

        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this.isAboutRoute = event.url === '/');
    }

    private getTheme(): void {
        this.themeService.getTheme().subscribe((value: string) => this.theme = value);
    }
}
