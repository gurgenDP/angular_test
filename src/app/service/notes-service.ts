import { Injectable } from "@angular/core";
import { Note } from '../model/note-model';
import { Subject } from 'rxjs';
@Injectable(
    {
        providedIn: 'root'
    }
)
export class NotesService {
    sidenavOpened: boolean = true;

    sidenavOpenedSubject = new Subject<boolean>();
    selectedNoteSubject = new Subject<string>();

    selectedNote: string;

    notes: Note[] = [
        {
            id: 'hufe2323',
            title: 'Title 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error non necessitatibus, soluta laudantium nesciunt repellendus iure corrupti repudiandae est quidem ipsa omnis inventore, facere, dolorum animi in incidunt sed.',
            createdDate: new Date(),
        },
        {
            id: 'edmelkf',
            title: 'Title 2',
            description: 'elit. Magni error non necessitatibus, soluta laudantium nesciunt repellendus iure corrupti repudiandae est quidem ipsa omnis inventore, facere, dolorum animi in incidunt sed.',
            createdDate: new Date(),
        },
    ];

    getNoteById(id: string): Note {
        console.log('getNoteById', id);

        let findNote: Note;

        for (let note of this.notes) {
            if (note.id == id) {
                findNote = note;
                break;
            }
        }

        return JSON.parse(JSON.stringify(findNote));
    }

    saveNote(note: Note) {
        let findNote: Note;

        for (let n of this.notes) {
            if (n.id == note.id) {
                findNote = n;
                break;
            }
        }

        findNote = note;
    }

    tooggleSidenav() {
        this.sidenavOpened = !this.sidenavOpened;

        this.sidenavOpenedSubject.next(this.sidenavOpened);
    }

    selectNote(id: string) {
        this.selectedNote = id;

        this.selectedNoteSubject.next(this.selectedNote);
    }
}