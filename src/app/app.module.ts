import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { MatCard, MatCardModule, MatGridListModule, MatSidenavModule, MatCheckboxModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatSelectModule } from '../../node_modules/@angular/material';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { NotesListComponent, HighlightSearch } from './notes-list/notes-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    NotesListComponent,    
    HighlightSearch
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,        
    ReactiveFormsModule,    
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatCheckboxModule,    
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    Ng2SearchPipeModule,
    MatMenuModule,
    MatSelectModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports:[
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,        
    ReactiveFormsModule,    
    MatCardModule,
    MatGridListModule,    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
