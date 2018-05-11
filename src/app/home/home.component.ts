import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loader: LoaderService) {
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.loader.show();
    setTimeout(() => {
      console.log('timeout');
      this.loader.hide();
    }, 3000);
  }

}
