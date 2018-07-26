import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "../app-routing.module";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
    ]
})
export class CoreModule{}