import { Component, OnInit } from '@angular/core';
import { Hose } from '../hose.model';
import { HoseService } from '../hose.service';
import { HoseType } from '../hose-type.model';
import { HoseTypeService } from '../hose-type.service';

@Component({
  selector: 'app-hose-list',
  templateUrl: './hose-list.component.html',
  styleUrls: ['./hose-list.component.css']
})
export class HoseListComponent implements OnInit {
hoses:Hose[];

  constructor(private hoseService: HoseService,
              private typeService: HoseTypeService) { }

  ngOnInit() {
    this.hoseService.hosesUpdated
      .subscribe(
        (hoses: Hose[]) => this.hoses = hoses
      )
  }
}
