import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor(private menuCtl: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
this.menuCtl.open('first');
  }

  onClick(){
    console.log('hola')
  }
}
