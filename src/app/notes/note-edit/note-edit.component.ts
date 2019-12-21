import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../service/notes-service';
import { Note } from 'src/app/model/note-model';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  constructor(private ntS: NotesService) { }

  selectedNote: Note;

  ngOnInit() {
    if (this.ntS.isNewNote) {
      this.selectedNote = {
        id: new Date().getTime().toString(),
        title: '',
        description: '',
        createdDate: new Date()
      };

    } else {
      let selectedId: string = this.ntS.selectedNote;

      if (selectedId) {
        this.selectedNote = this.ntS.getNoteById(selectedId);
      }
    }

    this.ntS.selectedNoteSubject.subscribe((value) => {
      this.selectedNote = this.ntS.getNoteById(value);
    });

    this.ntS.isNewNoteSubject.subscribe((isNew) => {
      if (isNew) {
        this.selectedNote = {
          id: new Date().getTime().toString(),
          title: '',
          description: '',
          createdDate: new Date()
        };
      }
    });
  }

  save() {
    if (this.selectedNote) {
      const id = this.selectedNote.id;
      const title = this.selectedNote.title;
      const description = this.selectedNote.description;
      const createdDate = new Date();

      const note: Note = {
        id: id,
        title: title,
        description: description,
        createdDate: createdDate,
      }

      this.ntS.saveNote(note);
      this.ntS.closeForm();

    }
  }

  delete() {
    if (!this.ntS.isNewNote) {
      this.ntS.deleteNote(this.selectedNote);
      this.ntS.closeForm();
    }
  }
}
