import {Component, inject, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [],
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

    private title: Title = inject(Title);

    public ngOnInit(): void {
        this.title.setTitle('Contact');
    }
}
