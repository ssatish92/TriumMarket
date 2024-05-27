import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ServiceComponent } from './Components/service/service.component';
import { BoutiexpComponent } from './Components/boutiexp/boutiexp.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CoursilyComponent } from './Components/coursily/coursily.component';



export const routes: Routes = [

    {path:'service', component:ServiceComponent,},
    {path:'experice', component:BoutiexpComponent,},
    { path:'about', component:AboutComponent,},
    {path:'contact', component:ContactComponent,},
    {path:'testmon', component:CoursilyComponent,},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRoutingModule{}

