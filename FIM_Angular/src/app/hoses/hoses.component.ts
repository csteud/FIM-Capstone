import { Component, OnInit } from '@angular/core';
import { HoseService } from './hose.service';
import { Hose } from './hose.model';
import { HoseTypeService } from './hose-type.service';

@Component({
  selector: 'app-hoses',
  templateUrl: './hoses.component.html',
  styleUrls: ['./hoses.component.css'],
  providers: [HoseService, HoseTypeService]
})
export class HosesComponent implements OnInit {

  selectedHose: Hose;

  constructor(private hoseService: HoseService) { }

  ngOnInit() {
    this.hoseService.hosesUpdated.subscribe(
      (hose: Hose) => {
        this.selectedHose = hose;
      }
    );
  }

}
