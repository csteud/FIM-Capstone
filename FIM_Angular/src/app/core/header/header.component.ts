import { Component, OnInit } from '@angular/core';
import { Hose } from '../../hoses/hose.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
private hose: Hose;

  constructor() { 

  }

  ngOnInit() {
  }

}
