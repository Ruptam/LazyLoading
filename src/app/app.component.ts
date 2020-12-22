import { Component } from '@angular/core';
import { CommonService } from './Service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LazyLoadingExample';
  constructor(public commonService : CommonService) {
  
  }
}
