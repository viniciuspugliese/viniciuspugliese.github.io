import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {SocialMediaService} from "../../shared/services/social-media.service";
import {TooltipModule} from "ngx-bootstrap/tooltip";

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink,
        RouterLinkActive,
        TooltipModule,
    ],
    templateUrl: './profile.component.html'
})
export class ProfileComponent {

    public socialMediaService: SocialMediaService = inject(SocialMediaService);

    public downloadCV(): void {

    }
}
