import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  links: Array<Object>;

  constructor(private router: Router) {
    console.log(router.url);
    console.log(router.isActive('home', true));
  }

  ngOnInit() {
    this.links = [
      {name: 'test1', url: '/url0', active: false},
      {name: 'log', url: '/home/log', active: false},
      {name: 'test3', url: '/url1', active: false},
      {name: 'test4', url: '/url2', active: false},
      {name: 'test5', url: '/url3', active: false},
    ];
  }

}
