import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes-service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {


  opened: boolean;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.opened = this.notesService.sidenavOpened;
  }

}
