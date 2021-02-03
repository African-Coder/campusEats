import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';
import { OrderComponent } from './order/order.component';
import {CapCheckValidatorDirective} from './shared/cap-check-validator.directive';
import {LowerCheckValidatorDirective} from './shared/low-check-validator.directive';
import {DigitCheckValidatorDirective} from './shared/digit-check-validator.directive';
import {CheckMinimumValidatorDirective} from './shared/check-minimum-validator.directive';
import { HttpClientModule } from '@angular/common/http';
//import { User } from './user';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    ConfirmEqualValidatorDirective,
    OrderComponent,
    CapCheckValidatorDirective,
    LowerCheckValidatorDirective,
    DigitCheckValidatorDirective,
    CheckMinimumValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
