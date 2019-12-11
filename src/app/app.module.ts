import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule, 
  MatInputModule, 
  MatButtonModule, 
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatDividerModule
 } from '@angular/material';
import { NotesComponent } from './notes/notes.component';
import { HeaderComponent } from './notes/header/header.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoteComponent } from './notes/note/note.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HeaderComponent,
    NotesListComponent,
    NoteEditComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDividerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NotesComponent],
})
export class AppModule { }
