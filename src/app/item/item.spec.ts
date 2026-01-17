import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item } from './item';
import { EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';

describe('Item', () => {
  let component: Item;
  let fixture: ComponentFixture<Item>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Item]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Item);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit editTodoEvent', () => {
    const emitSpy = vi.spyOn(component.editTodoEvent, 'emit');
    const item = {
      title: "Test Edit Todo", completed: false, id: 1, editing: false
    }
    component.editTodoEventMethod(item);
    expect(emitSpy).toHaveBeenCalledWith(item);
  });

  it('should emit removeTodoEvent', () => {
    const emitSpy = vi.spyOn(component.removeTodoEvent, 'emit');
    const item = {
      title: "Test Remove Todo", completed: false, id: 1, editing: false
    }
    component.removeTodoEventMethod(item);
    expect(emitSpy).toHaveBeenCalledWith(item);
    console.log(emitSpy.mock.calls);
  });
});


