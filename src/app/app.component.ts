import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { IntroComponent } from "./Components/intro/intro.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { CoursilyComponent } from "./Components/coursily/coursily.component";
import { ServiceComponent } from "./Components/service/service.component";
import { AboutComponent } from "./Components/about/about.component";
import { ContactComponent } from "./Components/contact/contact.component";
import { BoutiexpComponent } from "./Components/boutiexp/boutiexp.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
        NavbarComponent,
        IntroComponent,
        FooterComponent,
        CoursilyComponent, 
        ServiceComponent, 
        AboutComponent, 
        ContactComponent, 
        BoutiexpComponent,
      RouterModule]
})
export class AppComponent {
  title = 'Trium Market Researcher';
}
