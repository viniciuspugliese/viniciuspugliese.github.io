import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MobileNavService {

    private show: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public get(): Observable<boolean> {
        return this.show.asObservable();
    }

    public toggle(): void {
        this.show.next(! this.show.value);
    }
}
