import { Component, OnInit, Input, PipeTransform, Pipe } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { TextEditorComponent } from '../text-editor/text-editor.component';
import { DomSanitizer } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  @Input() notes;
  @Input() searchText;

  constructor(private _notesService:ItemServiceService,
                private texteditor : TextEditorComponent) { 

  }

  ngOnInit() {
  }

  get listOfNotes(){
    return this._notesService.getlistOfNotes();
  }
  get isNotesPresent(){
    if(this.notes)
      return this.notes.trim().length>0;
    return null;
  }

  
  openNotes(i){
    this.texteditor.openNotes(i);
  }

  isActiveItem(notes){
    return notes.notes == this.texteditor.notes;
  }
  addnew(){
    this.texteditor.notes=null;
  }

}

@Pipe({
  name: 'highlight'
})
export class HighlightSearch implements PipeTransform {
constructor(private sanitizer: DomSanitizer){}

transform(value: any, args: any): any {
  if (!args) {
    return value;
  }
  // Match in a case insensitive maneer
  const re = new RegExp(args, 'gi');
  const match = value.match(re);

  // If there's no match, just return the original value.
  if (!match) {
    return value;
  }

  const replacedValue = value.replace(re, "<mark>" + match[0] + "</mark>")
  return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
}
}
