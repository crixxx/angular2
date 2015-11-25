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
    constructor()
    {
        console.log( 'application' );
    }
}


////////////////////////////////////////////////////////////////////////////////

bootstrap( AppComponent );
