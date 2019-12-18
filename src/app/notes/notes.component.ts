import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from '../service/notes-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {
  opened: boolean;
  subscription: Subscription;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.opened = this.notesService.sidenavOpened;

    this.subscription = this.notesService.sidenavOpenedSubject.subscribe(
      (value) => {
        this.opened = value;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
