import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SearchbarComponent } from "../../components/searchbar/searchbar.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, FooterComponent, SearchbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
