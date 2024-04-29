import {Component, inject, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [],
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

    private title: Title = inject(Title);

    public ngOnInit(): void {
        this.title.setTitle('Portfolio');
    }
}
