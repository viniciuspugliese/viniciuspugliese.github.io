import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private theme: BehaviorSubject<'light' | 'dark'> = new BehaviorSubject('light');

    constructor() {
    }

    getTheme(): Observable<'light' | 'dark'> {
        return this.theme.asObservable();
    }

    public changeTheme(): void {
        if (this.theme.value === 'light') {
            this.theme.next('dark');
        } else {
            this.theme.next('light');
        }
    }
}