import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  opened = true;
  loading = true;

  constructor(private loader: LoaderService) {
  }

  ngOnInit() {
    this.subscription = this.loader.status.subscribe(async (loading: boolean) => {
      console.log('subscribe', loading);
      this.loading = await loading;
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subscription.unsubscribe();
  }

  onActivate(event, mainContainer) {
    console.log(event);
    mainContainer.scrollTop = 0;
  }
}
