import {Component, inject, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [],
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

    private title: Title = inject(Title);

    public ngOnInit(): void {
        this.title.setTitle('About');
    }
}
