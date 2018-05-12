import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menus: any;

  constructor(private router: Router) {
    console.log(router.url);
    console.log(router.isActive('home', true));
  }

  ngOnInit() {

    this.menus = [
      {name: 'Home', icon: 'home', url: '/home2', submenus: []},
      // [expanded]="router.isActive('home', false)"
      {
        name: '系统设置', icon: 'settings', expanded: false,
        submenus: [
          {name: 'test1', url: '/url1'},
          {name: 'test2', url: '/url2'},
          {name: 'test3', url: '/url3'},
          {name: 'test4', url: '/url4'},
          {name: 'test5', url: '/url5'},
        ]
      },
      {
        name: '访问日志', icon: 'list', expanded: false,
        submenus: [
          {name: 'log', url: '/home/log'},
          {name: 'test1', url: '/url1'},
          {name: 'test2', url: '/url2'},
          {name: 'test3', url: '/url3'},
          {name: 'test4', url: '/url4'},
          {name: 'test5', url: '/url5'},
        ]
      }
    ];
  }

}
