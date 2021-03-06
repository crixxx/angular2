import { Component, Output, Input, EventEmitter, OnChanges, HostBinding } from 'angular2/angular2';

@Component({
    selector: 'comp-a',
    templateUrl: 'app/compA.html',
    styles: [
        `.root{
            border: 1px solid red;
        }`
    ],
    inputs: [ 'testProperty' ],
    //outputs: [ 'btnp:buttonPressed' ],
})
export class ComponentA
{
    // important: the event name in HTML is 'btn-pressed'
    @Output( 'buttonPressed' ) btnp = new EventEmitter();
    //btnp = new EventEmitter();

//    @Input() checked: boolean;
    private testProperty: string = 'input property';

    @Input() inputValue: string;
    
    @HostBinding( 'class' ) hbprop = 'abbb';

    private checkedText: string;

    constructor()
    {
        console.log( 'component A' );
    }

    buttonPressed()
    {
        console.log( 'button component A' );
        this.btnp.next({}); // fire the event
    }

//    onChanges( changes )
//    {
//        // watch for changes of 'checked' property
//        if( changes.checked )
//        {
//            console.log( `ComponentA, checked property - value changed: ${changes.checked.currentValue ? 'true' : 'false'}` );
//            this.checkedText = changes.checked.currentValue ? 'checked' : 'not checked';
//        }
//    }
    
    @Input() set checked( value: boolean )
    {
        this.checkedText = value ? 'checked' : 'not checked';
    }

    
}
