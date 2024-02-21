import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { AproposComponent } from "./apropos/apropos.component";
import { CompetencesComponent } from "./competences/competences.component";
import { CertificatsComponent } from "./certificats/certificats.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjetsComponent } from "./projets/projets.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, AccueilComponent, AproposComponent, CompetencesComponent, CertificatsComponent, ContactComponent, ProjetsComponent]
})
export class AppComponent {
  title = 'projet_angular';
}
