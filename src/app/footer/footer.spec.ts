import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit changeFilterEvent', () => {
    const emitSpy = vi.spyOn(component.changeFilterEvent, 'emit');
    component.changeFilterMethod('all');
    expect(emitSpy).toHaveBeenCalledWith('all'); //check if the function fired with the right value
    component.changeFilterMethod('active');
    expect(emitSpy).toHaveBeenCalledWith('active');
    component.changeFilterMethod('completed');
    expect(emitSpy).toHaveBeenCalledWith('completed');
  });

  it('should emit removeCompletedEvent', () => {
    const emitSpy = vi.spyOn(component.removeCompletedEvent, 'emit'); //create a spy on the removeCompletedEvent method
    component.removeCompletedEventMethod(); //call the removeCompletedEventMethod
    expect(emitSpy).toHaveBeenCalled(); //check if the function fired
  })
});
