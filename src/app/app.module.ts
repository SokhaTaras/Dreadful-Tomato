import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MediaContent } from './components/movies/media-content';
import { SearchComponent } from './components/search/search.component';
import {DreadfulTomatoesApiService} from './services/dreadful-tomatoes-api.service';
import {EntriesStateService} from './services/entries-state.service';
import { EntriesListComponent } from './components/entries-list/entries-list.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    MediaContent,
    SearchComponent,
    EntriesListComponent,
    PaginatorComponent,
    CardComponent,
    DatePickerComponent,
    DatePickerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [DreadfulTomatoesApiService, EntriesStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
