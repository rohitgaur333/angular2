import { Component } from '@angular/core';

import {SearchComponent} from './searchuser/searchuser.component';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

  
})
export class SidebarComponent {
  showMenuMember: boolean;
  clicked: string = null;

    sideNavClick(clicked: string): void {
        this.clicked = this.clicked == clicked ? null : clicked;
    }

    sideNavAlert(): void {
        alert("sublist item clicked");
    }

  constructor(){
    this.showMenuMember = false;
  }
}
