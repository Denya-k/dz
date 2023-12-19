import { ITEMS } from './../mock-todo-items';
import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './to-do-items';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss']
})

export class ToDoItemsComponent implements OnInit {

  car: string = "BMW";

  titleBool: boolean = false;

  items = ITEMS;

  toDoItem: ToDoItem = {
    id: 1,
    name: "Call Joe",
    isComplete: false
  };
 

  constructor() {
    
  }

  ngOnInit(): void {
      
  }
  


}
