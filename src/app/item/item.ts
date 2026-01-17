import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  imports: [FormsModule],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input() itemData!: Todo;
  @Input() editTodoTextData!: string;

  @Output() toggleCompletionEvent = new EventEmitter<Todo>();
  @Output() removeTodoEvent = new EventEmitter<Todo>();
  @Output() editTodoEvent = new EventEmitter<Todo>();
  @Output() saveItemEvent = new EventEmitter<Todo>();
  @Output() cancelEditEvent = new EventEmitter<Todo>();
  @Output() editTodoTextDataChange = new EventEmitter<string>();

  editingTodoTitleChangeEventMethod(value: string) {
    this.editTodoTextDataChange.emit(value);
  }

  toggleCompletionEventMethod(itemData: Todo) {
    this.toggleCompletionEvent.emit(itemData);
  }

  removeTodoEventMethod(itemData: Todo) {
    this.removeTodoEvent.emit(itemData);
  }

  editTodoEventMethod(itemData: Todo) {
    this.editTodoEvent.emit(itemData);
    setTimeout(() => {
      this.editInput?.nativeElement.focus();
    });
  }

  saveItemEventMethod(itemData: Todo) {
    this.saveItemEvent.emit(itemData);
  }

  cancelEditEventMethod(itemData: Todo) {
    this.cancelEditEvent.emit(itemData);
  }

  // Double click edit feature functions
  @ViewChild('editInput') editInput!: ElementRef<HTMLInputElement>;
}



