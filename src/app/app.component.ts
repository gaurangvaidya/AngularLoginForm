import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-example';

  handleParentEvent(event:any)
  {

    alert("This Is Parent "+JSON.stringify(event));

    event.fullName = event.firstName + ' ' + event.lastName;
    
    




  }
}
