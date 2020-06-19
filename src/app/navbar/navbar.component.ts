import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/sort-24px.svg'));
    iconRegistry.addSvgIcon(
      'list',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/list-24px.svg'));
    iconRegistry.addSvgIcon(
      'about',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/menu_book-24px.svg'));
    iconRegistry.addSvgIcon(
      'feedback',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/local_post_office-24px.svg'));
    iconRegistry.addSvgIcon(
      'customer',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/local_phone-24px.svg'));
    iconRegistry.addSvgIcon(
      'rate',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/star_border-24px.svg'));
    iconRegistry.addSvgIcon(
      'terms',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/text_snippet-24px.svg'));
  }

  ngOnInit(): void {
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
