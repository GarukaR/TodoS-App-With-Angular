import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from './app';

describe('App Component', () => {
  let fixture: ComponentFixture<App>;
  let app: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App] // Standalone component → NO declarations needed
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule(); // Proper cleanup for standalone components
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Todos App');
  });

  it('should add a new todo', () => {
    app.newTodo = 'Test Todo 1';
    app.addTodo();

    const [todo] = app.allItems;

    expect(app.allItems.length).toBe(1);
    expect(todo.title).toBe('Test Todo 1');
    expect(todo.completed).toBe(false);
    expect(todo.editing).toBe(false);
    expect(todo.id).toBe(1);
    expect(app.newTodo).toBe('');
  });

  it('should toggle completion', () => {
    const todo = app.allItems[0];
    app.toggleCompletion(todo);
    expect(todo.completed).toBe(true);
  });

  it('should edit a todo', () => {
    const todo = {
      id: 1,
      title: 'Test Todo',
      completed: false,
      editing: false
    };
    app.editTodo(todo);
    expect(todo.editing).toBe(true);
    app.saveItem(todo);
    expect(todo.editing).toBe(false);
  })

  it('should save a todo', () => {
    const todo1 = {
      id: 1,
      title: 'Test Todo Unsaved',
      completed: false,
      editing: true
    };

    app.allItems = [todo1];        // ensure the list contains the todo
    app.editTodoText = 'Test Todo Saved';  // <-- IMPORTANT

    expect(app.allItems[0].title).toBe('Test Todo Unsaved'); // check title before saving

    app.saveItem(todo1);

    expect(app.allItems.length).toBe(1);
    expect(app.allItems[0].editing).toBe(false);
    expect(app.allItems[0].title).toBe('Test Todo Saved');
  });


  it('should cancel edit a todo', () => {
    const todo = app.allItems[0];
    app.editTodo(todo);
    expect(todo.editing).toBe(true);
    app.cancelEdit(todo);
    expect(todo.editing).toBe(false);
  })
});
