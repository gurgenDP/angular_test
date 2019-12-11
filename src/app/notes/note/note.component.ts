import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Note } from 'src/app/model/note-model';
import { NotesService } from 'src/app/service/notes-service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, AfterViewInit {
  @Input() id: string;
  note: Note;


  constructor(private notesService: NotesService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.note = this.notesService.getNoteById(this.id);
    }, 0);
  }
}
