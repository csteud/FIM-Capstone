import { Component, OnInit, Input } from '@angular/core';
import { Hose } from '../hose.model';
import { HoseService } from '../hose.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HoseType } from '../hose-type.model';

@Component({
  selector: 'app-hose-detail',
  templateUrl: './hose-detail.component.html',
  styleUrls: ['./hose-detail.component.css']
})
export class HoseDetailComponent implements OnInit {
  hose = new Hose(0, '', new HoseType(0,0,0));
  id: number;

  constructor(private hoseService: HoseService,
              private route: ActivatedRoute,
              private router: Router) { 

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];

          this.hoseService.hosesUpdated
            .subscribe(
              () => {
              this.hoseService.getHose(this.id)
                .subscribe(
                  (hose: Hose) => {
                    this.hose = hose;
                  }
                );
              }
            );

          this.hoseService.getHose(this.id)
            .subscribe(
              (hose: Hose) => {
                this.hose = hose;
              }
            );
        }
      );
  }

}
