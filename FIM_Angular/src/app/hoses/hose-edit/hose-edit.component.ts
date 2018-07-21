import { Component, OnInit } from '@angular/core';
import { HoseService } from '../hose.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Hose } from '../hose.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HoseType } from '../hose-type.model';

@Component({
  selector: 'app-hose-edit',
  templateUrl: './hose-edit.component.html',
  styleUrls: ['./hose-edit.component.css']
})
export class HoseEditComponent implements OnInit {

  private hose = new Hose(0, '', new HoseType(0,0,0));
  private editHoseForm: FormGroup;

  constructor(private hoseService: HoseService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.hoseService.getHose(+params['id'])
            .subscribe(
              (hose: Hose) => {
                this.hose = hose;
              }
            );
        }
    );

    this.editHoseForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'hoseType': new FormGroup({
        'diameter': new FormControl(null, [Validators.required]),
        'length': new FormControl(null, [Validators.required])
      })
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    if(this.editHoseForm.get('name') !== null) {
      this.hose.name = this.editHoseForm.get('name').value;
    }
    if(this.editHoseForm.get('type.length') !== null) {
      this.hose.type.length = this.editHoseForm.get('type.length').value;
    }
    if(this.editHoseForm.get('type.diameter') !== null) {
      this.hose.type.diameter = this.editHoseForm.get('type.diameter').value;
    }

    const id = +this.route.snapshot.params['id'];

    this.hoseService.updateHose(id, this.hose);

    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
