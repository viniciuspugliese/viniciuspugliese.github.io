import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './profile.component.html'
})
export class ProfileComponent {

    public downloadCV(): void {

    }
}
