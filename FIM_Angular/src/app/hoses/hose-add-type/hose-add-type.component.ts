import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HoseTypeService } from '../hose-type.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hose-add-type',
  templateUrl: './hose-add-type.component.html',
  styleUrls: ['./hose-add-type.component.css']
})
export class HoseAddTypeComponent implements OnInit {

  private addTypeForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private hoseTypeService: HoseTypeService) { }

  ngOnInit() {
    this.addTypeForm = new FormGroup({
      'length': new FormControl(null, Validators.required),
      'diameter': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    const newType = this.mapToHoseType(this.addTypeForm.value);

    this.hoseTypeService.addHoseType(newType)
      .subscribe(
        (response) => {
          this.hoseTypeService.hoseTypesUpdated.next();
        },
        (error) => console.log(error)
      );

      this.router.navigate(['../'], {relativeTo: this.route});
  }

  mapToHoseType(formValue) {
    return {
      'diameter': formValue.diameter,
      'length': formValue.length
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
