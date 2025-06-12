import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe-shell';


  sendEvent(): void {
    
    const event = new CustomEvent('event', {
      detail: {
        message: 'Hello from shell'
      }
    });
    window.dispatchEvent(event);
  }
}
