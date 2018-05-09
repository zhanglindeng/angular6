import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  links: Array<Object>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route);
    this.links = [
      {name: 'test1', url: '/home', active: true},
      {name: 'test2', url: '#', active: false},
      {name: 'test3', url: '#', active: false},
      {name: 'test4', url: '#', active: false},
      {name: 'test5', url: '#', active: false},
    ];
  }

}
