import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  arr =[]
 opened: boolean;
 notesDetails;
 listOfNotes= [];
 notes:string;
 currentDateTime : Date ;
 existingNotes : string;
 currentState:string;
 notesToDelete:string;
 key:string;
 showOptionsInColumns : boolean;
 colors = ["aliceblue","antiquewhite","aqua","chartreuse","yellow","cadetblue"];
 Selectedcolor:string;
 
onResize(event) {
  this.showOptionsInColumns = event.target.innerWidth < 600;
}
 
  
  constructor(private _notesService : ItemServiceService){
    this.listOfNotes = this._notesService.getlistOfNotes();
    this.currentDateTime = new Date();
  }  
  ngOnInit() {
  }


  get isNotesPresent(){
    if(this.notes)
      return this.notes.trim().length>0;
    return null;
  }

  get currentDate(){
    return new Date();
  }
 
  // save the data
  save() {
    if (this.notes) {
      if(this.currentState == "New"){
        this._notesService.addNotesToList({ notes: this.notes, date: new Date() });
        this.notes = null;
      }
      else{        
        const index = this.listOfNotes.findIndex(i=>i.notes == this.existingNotes)        
        this._notesService.update(this.notes,index)
        this.listOfNotes =  this._notesService.listOfNotes;
        this.notes = null;
      }

    }  
    else{
      this.deleteNotes(this.existingNotes)
    }   
  }
  
  getStatus(){
    this.existingNotes = this.notes;
    this.notes ? this.currentState="Draft":this.currentState="New"
  }
  
  deleteNotes(notes){
    this.notesToDelete = notes;
    const index =this.listOfNotes.findIndex(i => i.notes == this.notesToDelete)
    if(index != -1){
      this.notes = null;    
      this.listOfNotes.splice(index,1);
      this._notesService.listOfNotes = this.listOfNotes;
    }

  }

  openNotes(index:number){
    this.notesDetails = this._notesService.getlistOfNotes()[index];
    this.notes = this.notesDetails.notes
  }

  
  search(key){
    this.listOfNotes = this._notesService.getlistOfNotes();
    this.listOfNotes = this.listOfNotes.filter(note=>note.notes)
  }
  
  getcolor(){
    return this.Selectedcolor;
  }
}
