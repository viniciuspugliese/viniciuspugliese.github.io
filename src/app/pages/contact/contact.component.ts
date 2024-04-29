import {Component, inject, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";
import {SocialMediaService} from "../../shared/services/social-media.service";

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [],
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

    private title: Title = inject(Title);
    public socialMediaService: SocialMediaService = inject(SocialMediaService);

    public ngOnInit(): void {
        this.title.setTitle(environment.title + ' - Contact');
    }

    public downloadCV(): void {

    }
}
