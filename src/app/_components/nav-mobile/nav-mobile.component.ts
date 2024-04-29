import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MobileNavService} from "../../shared/services/mobile-nav.service";

@Component({
    selector: 'app-nav-mobile',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './nav-mobile.component.html'
})
export class NavMobileComponent implements OnInit {

    private mobileNavService: MobileNavService = inject(MobileNavService);

    public showMobileNav: boolean = false;

    public ngOnInit(): void {
        this.mobileNavService.get().subscribe(value => this.showMobileNav = value);
    }

    public toggleShowMobileNav(): void {
        this.mobileNavService.toggle();
    }
}
