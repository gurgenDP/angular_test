import { Injectable } from "@angular/core";
import { Note } from '../model/note-model';
@Injectable(
    {
        providedIn: 'root'
    }
)
export class NotesService {
    sidenavOpened: boolean = true;

    notes: Note[] = [
        {
            id: 'hufe2323',
            title: 'Title 1',
            description: 'ededew',
            createdDate: new Date(),
        },
        {
            id: 'edmelkf',
            title: 'Title 2',
            description: 'ededew',
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

        return findNote;
    }
}