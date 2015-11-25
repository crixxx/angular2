import { Component } from 'angular2/angular2';

@Component({
    selector: 'comp-a',
    templateUrl: 'app/compA.html',
    styles: [
        `* {
            background-color: red;
        }`
    ],
})
export class ComponentA
{
    constructor()
    {
        console.log( 'component A' );
    }
}
