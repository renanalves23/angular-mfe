import { Component } from '@angular/core';
import { SharedDataService } from 'src/services/store/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfe-shell';

  constructor(private sharedDataService: SharedDataService) {
    window.sharedDataService = this.sharedDataService;
  }

}
