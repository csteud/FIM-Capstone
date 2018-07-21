import { Component, OnInit, Input } from '@angular/core';
import { Hose } from '../../hose.model';
import { HoseService } from '../../hose.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-hose-item',
  templateUrl: './hose-item.component.html',
  styleUrls: ['./hose-item.component.css']
})
export class HoseItemComponent implements OnInit {
@Input() hose: Hose;

  constructor(private hoseService: HoseService,
              private route: ActivatedRoute,
              private router: Router) { 

  }

  ngOnInit() {
  }
}
