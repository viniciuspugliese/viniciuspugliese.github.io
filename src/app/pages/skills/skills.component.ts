import {Component, inject, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";
import {CircleProgressService} from "../../shared/services/circle-progress.service";

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [],
    templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

    private title: Title = inject(Title);
    private circleProgressService: CircleProgressService = inject(CircleProgressService);

    public ngOnInit(): void {
        this.title.setTitle(environment.title + ' - Skills');

        this.circleProgressService.init(
            '#skill-java', {max: 100, value: 96, textFormat: 'percent'}
        );

        this.circleProgressService.init(
            '#skill-tests', {max: 100, value: 85, textFormat: 'percent'}
        );

        this.circleProgressService.init(
            '#skill-auth', {max: 100, value: 87, textFormat: 'percent'}
        );

        this.circleProgressService.init(
            '#skill-angular', {max: 100, value: 95, textFormat: 'percent'}
        );

        this.circleProgressService.init(
            '#skill-bootstrap', {max: 100, value: 90, textFormat: 'percent'}
        );

        this.circleProgressService.init(
            '#skill-db', {max: 100, value: 94, textFormat: 'percent'}
        );

        this.circleProgressService.init(
            '#skill-tools', {max: 100, value: 95, textFormat: 'percent'}
        );
    }
}
