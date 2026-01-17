import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Input() remaining!: number;
  @Input() filter!: 'all' | 'active' | 'completed';
  @Input() completed!: number;

  @Output() removeCompletedEvent = new EventEmitter<void>();
  @Output() changeFilterEvent = new EventEmitter();

  changeFilterMethod(value: any) {
    this.changeFilterEvent.emit(value);
  }

  removeCompletedEventMethod() {
    this.removeCompletedEvent.emit();
  }
}
