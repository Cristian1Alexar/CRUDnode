import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BookformComponent } from './components/bookform/bookform.component';
import { BooklistComponent } from './components/booklist/booklist.component';

import { BooksService } from './services/books.service';
import { EditbookformComponent } from './editbookform/editbookform.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookformComponent,
    BooklistComponent,
    EditbookformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
