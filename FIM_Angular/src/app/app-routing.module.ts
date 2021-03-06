import { Routes, RouterModule, PreloadAllModules } from "@angular/router"
import { NgModule } from "@angular/core";

import { HomeComponent } from "./core/home/home.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'hoses', loadChildren: './hoses/hoses.module#HosesModule'},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}