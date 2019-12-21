import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../service/notes-service';
import { Note } from 'src/app/model/note-model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  notes: Note[];

  ngOnInit() {
    this.notes = this.notesService.notes;

    this.notesService.notesSubject.subscribe((notes) => {
      this.notes = notes;

      console.log(notes);
    });
  }

  selectNote(id: string) {
    this.notesService.selectNote(id);
  }

}