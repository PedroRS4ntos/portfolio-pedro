import { Component } from '@angular/core';
import { MenuService } from '../services/menu';
import { Menu } from '../models/menu';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {

  constructor(private menuService: MenuService) {}

  menuStatus: string = 'closed';

  menuItems?: Array<Menu>;

  ngOnInit () {
    const menu = this.menuService.getItems();

    this.menuItems = menu;
  }

  menuClick() {

    this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open');

  }

}
