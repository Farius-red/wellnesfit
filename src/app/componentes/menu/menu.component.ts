import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/modelos/menu';
import { MenuService } from 'src/app/servicios/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  icons: Observable<Menu[]>;
  constructor(private menuController: MenuController,
    private menuSer:MenuService
    ) { }

  ngOnInit() {
    this.getMenu();
  }
 getMenu(){
  this.icons=this.menuSer.getMenu();
 }

  mostrarMenu(){
    this.menuController.open('first');
  }



}
