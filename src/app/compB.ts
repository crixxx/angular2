import { Component } from 'angular2/angular2';

@Component({
    selector: 'comp-b',
    templateUrl: 'app/compB.html',
    styles: [
        `* {
            background-color: blue;
        }`
    ],
})
export class ComponentB
{
    constructor()
    {
        console.log( 'component B' );
    }
}
