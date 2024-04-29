import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

declare let window: any;

@Injectable({
    providedIn: 'root'
})
export class SocialMediaService {

    constructor() {
    }

    public get(id: string): string {
        return environment.socialMedia.filter(value => value.id === id)[0].url;
    }

    public goTo(id: string): void {
        window.open(this.get(id), '_blank');
    }
}
