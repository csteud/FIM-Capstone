import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HoseEditComponent } from "./hose-edit/hose-edit.component";
import { HoseAddComponent } from "./hose-add/hose-add.component";
import { HoseDetailComponent } from "./hose-detail/hose-detail.component";
import { HosesComponent } from "./hoses.component";
import { HoseDeleteComponent } from "./hose-delete/hose-delete.component";
import { HoseAddTypeComponent } from "./hose-add-type/hose-add-type.component";

const hosesRoutes: Routes = [
    { path: '', component: HosesComponent, children: [ 
        {path: ':id/edit', component: HoseEditComponent},
        {path: ':id/delete', component: HoseDeleteComponent},
        {path: 'add', component: HoseAddComponent, pathMatch: 'full'},
        {path: 'add/type', component: HoseAddTypeComponent},
        {path: ':id', component: HoseDetailComponent}
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(hosesRoutes)
    ],
    exports: [RouterModule]
})
export class HosesRoutingModule {}