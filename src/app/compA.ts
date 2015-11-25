import { Component, Output, EventEmitter } from 'angular2/angular2';

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
    // important: the event name in HTML is 'btn-pressed'
    @Output() btnPressed = new EventEmitter();

    constructor()
    {
        console.log( 'component A' );
    }

    buttonPressed()
    {
        console.log( 'button component A' );
        this.btnPressed.next({}); // fire the event
    }
}
