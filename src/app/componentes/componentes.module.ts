
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MenuComponent,],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    
  ],

  exports:[MenuComponent,]
})
export class ComponentesModule { }
