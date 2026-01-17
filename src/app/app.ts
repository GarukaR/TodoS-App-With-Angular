import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StorageService } from './core/services/storage.service'; //StorageService for local storage
import { Item } from "./item/item"; //Item component for todo items 
import { Footer } from "./footer/footer"; //Footer component for footer
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Item, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('todomvc');

  private nextId = 1; // For generating unique IDs for todos

  allItems: Todo[] = []; // Array to store all todos

  // Retrieve saved todos from local storage with dependancy injection
  constructor(private storage: StorageService) {
    this.loadStore();
  }

  // Filter options
  filter: 'all' | 'active' | 'completed' = 'all';

  // Get items based on filter option function
  // Default filter is 'all' thus retrieving all items.

  changeFilter(value: any) {
    this.filter = value;
  }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }

    // If filter is 'active' then retrieving all items that are not completed.
    // If filter is 'completed' then retrieving all items that are completed. 
    return this.allItems.filter((item) => {
      return this.filter === 'completed' ? item.completed : !item.completed;
    })
  }

  // Get no of remaining incomplete items function
  get remaining() {
    return this.allItems.filter(todo => !todo.completed).length;
  }

  // Get editing item function
  get editing() {
    return this.allItems.find(todo => todo.editing);
  }

  // Toggle completion function - Connected with round checkbox
  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
    this.updateStore(); //Update localstorage for partial data persistance
  }

  // Toggle all items as completed function - Connected with downward arrow button
  toggleAll(checked: boolean) {
    this.allItems = this.allItems.map(item => ({ ...item, completed: checked }));
    this.updateStore(); //Update localstorage for partial data persistance 
  }

  // Get no of completed items function to conditionally render 'Clear completed todos' button
  get completed() {
    return this.allItems.filter(todo => todo.completed).length;
  }

  // Function to remove all completed items from the list when 'Clear completed todos' is clicked.
  removeCompleted() {
    this.allItems = this.allItems.filter(todo => !todo.completed);
    this.updateStore(); //Update localstorage for partial data persistance
  }

  // Function to remove item when 'X' mark infront of it is clicked.
  removeTodo(todo: Todo) {
    this.allItems.splice(this.allItems.indexOf(todo), 1);
    this.updateStore(); //Update localstorage for partial data persistance
  }


  // Data Manipulation Functions ====================

  // Adding items to the allItems Array
  newTodo = '';
  addTodo() {
    const newtitle = this.newTodo.trim();
    if (!newtitle) return;

    const newItem = {
      id: this.nextId++,
      title: newtitle,
      editing: false,
      completed: false
    };
    this.allItems.push(newItem);
    this.newTodo = '';
    console.log(`Added ${newtitle} to the list`);
    this.updateStore(); //Update localstorage for partial data persistance
  }


  editTodoText = '';
  editTodo(todo: Todo) {
    //Find acive item and cancel edit if any - this will avoid opening multiple edit forms
    const activeItem = this.allItems.find(item => item.editing);
    if (activeItem) {
      this.cancelEdit(activeItem);
    }
    todo.editing = true;
    this.editTodoText = todo.title;
  }

  saveItem(todo: Todo) {
    const trimmed = this.editTodoText.trim();
    if (!trimmed) return;
    todo.title = trimmed;
    todo.editing = false;
    this.updateStore(); //Update localstorage for partial data persistance
  }

  cancelEdit(todo: Todo) {
    todo.editing = false;
    console.log(`Cancelled editing ${todo.title}`);
  }

  // Local Storage Functions utilizing Storage Service
  updateStore() {
    this.storage.setStorage<Todo[]>('todoList', this.allItems);
  }

  loadStore() {
    this.allItems = this.storage.getStorage<Todo[]>('todoList') || [];
  }

  clearStore() {
    this.storage.clearStorage();
    this.allItems = []; // update UI state
  }
}

