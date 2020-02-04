import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  public listOfNotes:object[] = [];

  constructor() { }

  addNotesToList(notes : object){
    this.listOfNotes.push(notes)    
  }
  update(notes : Object,index:number){
    this.listOfNotes[index] = { notes: notes, date: new Date() }
  }

  getlistOfNotes(){
    return this.listOfNotes;
  }
}

