import {Injectable} from '@angular/core';

declare let CircleProgress: any; // https://tigrr.github.io/circle-progress/examples.html (^0.2.4)
declare let document: any;

@Injectable({
    providedIn: 'root'
})
export class CircleProgressService {

    constructor() {
    }

    public init(querySelector: string, params: CircleProgressParams) {
        new CircleProgress(document.querySelector(querySelector), params);
    }
}

export class CircleProgressParams {

    public max: number;

    public value: number;

    public textFormat: string;

    public clockwise?: boolean;

    public animation?: string;
}
