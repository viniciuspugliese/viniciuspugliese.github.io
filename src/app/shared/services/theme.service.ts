import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

declare let windows: any;

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private theme: BehaviorSubject<'light' | 'dark'> = new BehaviorSubject('light');

    public getTheme(): Observable<'light' | 'dark'> {
        this.handlerTheme();
        return this.theme.asObservable();
    }

    public toggleTheme(): void {
        if (this.theme.value === 'light') {
            this.theme.next('dark');
        } else {
            this.theme.next('light');
        }
    }

    public handlerTheme(): void {
        const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersColorScheme.matches) {
            this.theme.next('dark');
        }

        let self = this;
        prefersColorScheme.addListener(function(event) {
            if (event.matches) {
                self.theme.next('dark');
            }

            self.theme.next('light');
        });
    }
}
