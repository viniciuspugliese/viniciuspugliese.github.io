import {Component, inject, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-resume',
    standalone: true,
    imports: [],
    templateUrl: './resume.component.html'
})
export class ResumeComponent implements OnInit {

    private title: Title = inject(Title);

    public ngOnInit(): void {
        this.title.setTitle(environment.title + ' - Resume');
    }
}
