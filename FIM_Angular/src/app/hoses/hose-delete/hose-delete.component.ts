import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HoseService } from '../hose.service';

@Component({
  selector: 'app-hose-delete',
  templateUrl: './hose-delete.component.html',
  styleUrls: ['./hose-delete.component.css']
})
export class HoseDeleteComponent implements OnInit {

  private error;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private hoseService: HoseService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.hoseService.deleteHose(id)
      .subscribe(
        (response) => {
          this.hoseService.getHoses();
        },
        (error) => this.error = true
      );
  }

}
