import {Component, inject, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ThemeService} from "../../shared/services/theme.service";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    private themeService: ThemeService = inject(ThemeService);

    public theme: string;

    public ngOnInit(): void {
        this.getTheme();
    }

    public changeTheme() {
        this.themeService.changeTheme();
        this.getTheme();
    }

    private getTheme(): void {
        this.themeService.getTheme().subscribe((theme: string) => this.theme = theme);
    }
}
