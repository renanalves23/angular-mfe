import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mfe-sucesso';
  
  ngOnInit(): void {
    window.addEventListener('event', (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log('success', customEvent);
  
      this.title = customEvent.detail.message;
    });
  }
}
