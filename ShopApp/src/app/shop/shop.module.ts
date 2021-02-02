// repositorilerden gelen değerleri kullanabilmek için burada tanımlamalar yapmak gerekiyor
import { HttpClientModule } from '@angular/common/http';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Browser } from 'protractor';
import { CategoryRepository } from '../model/category.repository';
import { ModelModule } from '../model/model.module';
import { ProductRepository } from '../model/product.repository';
import { RestService } from '../model/rest.service';
import { ShopComponent } from './shop.component';

@NgModule({
    imports:[ModelModule,BrowserModule, FormsModule],
    declarations:[ShopComponent],
    exports:[ShopComponent]
})

export class ShopModule{

}