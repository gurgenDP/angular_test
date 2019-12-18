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
    let selectedId: string = this.ntS.selectedNote;

    if (selectedId) {
      this.selectedNote = this.ntS.getNoteById(selectedId);
    }

    this.ntS.selectedNoteSubject.subscribe((value) => {
      this.selectedNote = this.ntS.getNoteById(value);
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
    }
  }
}
