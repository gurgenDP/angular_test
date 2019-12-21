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
    notesSubject = new Subject<Note[]>();
    isNewNoteSubject = new Subject<boolean>();

    selectedNote: string;

    isNewNote: boolean = false;

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

        if (!findNote) {
            return null;
        }

        return JSON.parse(JSON.stringify(findNote));
    }

    saveNote(note: Note) {
        let index: number = 0;
        for (let n of this.notes) {
            if (n.id == note.id) {
                break;
            }

            index++;
        }

        this.notes[index] = note;

        this.notesSubject.next(this.notes);
    }

    tooggleSidenav() {
        this.sidenavOpened = !this.sidenavOpened;

        this.sidenavOpenedSubject.next(this.sidenavOpened);
    }

    selectNote(id: string) {
        this.selectedNote = id;
        this.isNewNote = false;

        this.selectedNoteSubject.next(this.selectedNote);
    }

    closeForm() {
        this.selectedNote = undefined;
        this.selectedNoteSubject.next(this.selectedNote);
    }

    newNote() {
        this.isNewNote = true;
        this.isNewNoteSubject.next(true);
    }

    deleteNote(note: Note) {
        let index: number = 0;
        for (let n of this.notes) {
            if (n.id == note.id) {
                break;
            }

            index++;
        }

        if (index < this.notes.length) {
            this.notes.splice(index, 1); 
        }

    }
}