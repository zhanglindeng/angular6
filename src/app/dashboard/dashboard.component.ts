import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opened = true;
  loading = true;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  onActivate(event, mainContainer) {
    console.log(event);
    mainContainer.scrollTop = 0;
  }
}
