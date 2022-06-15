import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  title = 'Deliforce-HR-Portal-UI';
  isLoading: boolean;
  constructor() {
  }

  ngOnInit() {
    this.isLoading = true;
  }
}
