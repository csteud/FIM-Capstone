import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HoseService } from '../hose.service';
import { Hose } from '../hose.model';
import { HoseTypeService } from '../hose-type.service';
import { HoseType } from '../hose-type.model';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-hose-add',
  templateUrl: './hose-add.component.html',
  styleUrls: ['./hose-add.component.css']
})
export class HoseAddComponent implements OnInit {
  private addHoseForm: FormGroup;
  private hoseTypes: HoseType[] = [];
  private hoseLengths: number[] = [];
  private hoseDiameters: number[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private hoseService: HoseService,
              private hoseTypeService: HoseTypeService) { }

  ngOnInit() {
    this.addHoseForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'hoseType': new FormGroup({
        'diameter': new FormControl(null, [Validators.required]),
        'length': new FormControl(null, [Validators.required])
      })
    });

    this.initHoseTypes();

    this.hoseTypeService.hoseTypesUpdated
      .subscribe(
        () => {
          this.initHoseTypes();
        }
      );
  }

  initHoseTypes() {
    this.hoseTypeService.getHoseTypes()
    .subscribe(
      (hoseTypes) => {
        for(const hoseType of hoseTypes) {
          if(!(this.hoseLengths.includes(hoseType.length))) {
            this.hoseLengths.push(hoseType.length);
          }
          if(!(this.hoseDiameters.includes(hoseType.diameter))) {
            this.hoseDiameters.push(hoseType.diameter);
          }
        }
        this.hoseTypes = hoseTypes
      }
    );
  }

  onSubmit() {
    const typeId = this.getTypeId(+this.addHoseForm.value['hoseType'].diameter, +this.addHoseForm.value['hoseType'].length);
    const newHose = this.mapToHose(this.addHoseForm.value, typeId);
    this.hoseService.addHose(newHose);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  mapToHose(formValue, typeId:number) {
    return {
      'name': formValue['name'],
      'type': {
        'id': typeId
      }
    }
  }

  getTypeId(diameter: number, length: number) {
    let typeId;

     this.hoseTypes.forEach((hoseType) => {
      if(hoseType.length === length && hoseType.diameter === diameter) {
        typeId = hoseType.id;
      }
    });

    return typeId;
  }

  onLengthChange(event) {
    const length = +event.target.value;

    this.hoseDiameters = [];

    this.hoseTypes.forEach((hoseType, index) => {
      if(hoseType.length !== length) {
        this.hoseTypes.slice(index, 1);
      } else {
        if(!(this.hoseDiameters.includes(hoseType.diameter))) {
          this.hoseDiameters.push(hoseType.diameter);
        }
      }
    });
  }

  onDiameterChange(event) {
    const diameter = +event.target.value;

    this.hoseLengths = [];

    this.hoseTypes.forEach((hoseType, index) => {
      if(hoseType.diameter !== diameter) {
        this.hoseTypes.slice(index, 1);
      } else {
        if(!(this.hoseLengths.includes(hoseType.length))) {
          this.hoseLengths.push(hoseType.length);
        }
      }
    });
  }

  onAddType() {
    this.router.navigate(['type'], {relativeTo: this.route})
  }
}
