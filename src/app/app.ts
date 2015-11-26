import { Component, bootstrap } from 'angular2/angular2';
import { ComponentA } from './compA';
import { ComponentB } from './compB';

////////////////////////////////////////////////////////////////////////////////

@Component({
      selector: 'app',
      templateUrl: 'app/app.html',
      directives: [ ComponentA, ComponentB ], // this is where the child components get instantiated
})
class AppComponent
{
    counter: number = 0;
    checked: boolean = false;
    
    constructor()
    {
        console.log( 'application' );
    }

    incrementCounter()
    {
        console.log( 'increment' );
        this.counter++;
    }

    getCheckedStatus(): boolean
    {
        return this.checked;
    }

}


////////////////////////////////////////////////////////////////////////////////

bootstrap( AppComponent );
