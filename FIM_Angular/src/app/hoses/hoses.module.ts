import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HosesComponent } from "./hoses.component";
import { HoseListComponent } from "./hose-list/hose-list.component";
import { HoseDetailComponent } from "./hose-detail/hose-detail.component";
import { HoseItemComponent } from "./hose-list/hose-item/hose-item.component";
import { HoseEditComponent } from "./hose-edit/hose-edit.component";
import { HoseAddComponent } from "./hose-add/hose-add.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { HosesRoutingModule } from "./hoses-routing.module";
import { HoseDeleteComponent } from './hose-delete/hose-delete.component';
import { HoseAddTypeComponent } from './hose-add-type/hose-add-type.component';

@NgModule({
    declarations: [
        HosesComponent,
        HoseListComponent,
        HoseDetailComponent,
        HoseItemComponent,
        HoseEditComponent,
        HoseAddComponent,
        HoseDeleteComponent,
        HoseAddTypeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        HosesRoutingModule
    ]
})
export class HosesModule {}