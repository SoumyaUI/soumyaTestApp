import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/service.service';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
